---
layout: post
title: 'Multi-language integration testing made easy with Bazel'
date: '2023-10-09'
author: garymm
tags:
- programming
- bazel
tweet_url: https://twitter.com/garymigu/status/1711536345783677213
hn_url: https://news.ycombinator.com/item?id=37833728
---

When developing mlflow-go, a Go client for MLFlow, I realized integration testing was crucial to ensure correctness. Since the official MLFlow server and client are written in Python, such an integration test would involve multiple languages. Bazel made it easy to set up and automate a multi-language test.

Bazel is a build tool and test runner. There’s lots to love about Bazel, but in this case the useful things are:
1. It supports many programming languages.
1. Its “data” and “runfiles” features enable one Bazel target to access other build outputs at run-time.
1. It can automatically download all needed language compilers / runtimes and external dependencies.

To understand why I wanted an integration test, I need to explain a little about the system under test. The client logs to and reads from a local file system. In a unit test, I can assert that the client is able to write and read back what it wrote, but I can’t assert that the files are in a format that the official MLFlow code will understand, since there is no specification of the file format. The fact that I can read my own handwriting is pretty useless if I’m writing you a letter and you can’t read it. A test that uses both the Go and Python client libraries can enforce compatibility.

Here’s pseudo-code[^1] for the test I ended up writing:

```
for client_binary in (go, py):
  temp_dir := make_temp_dir()
  run client binary in a subprocess, pointing it to write to temp_dir
  use official MLFlow client library to read from temp_dir
  assert we read what we expect to read
```

The test is declared in a BUILD.bazel file[^2]. Let’s walk through what’s in it. First we declare the binaries that write to MLFlow, using the Go and Python client libraries:

```python
# go binary that uses our go client
go_binary(
    name = "go",
    srcs = ["main.go"],
    deps = ["//:mlflow"],
)

# python binary that uses the official client
py_binary(
    name = "py",
    srcs = ["main.py"],
    main = "main.py",
    deps = ["@pip//mlflow:pkg"],
)
```

Then we declare the test, which depends on the above binaries as data:

```python
py_test(
    name = "conformance_test",
    srcs = ["conformance_test.py"],
    data = [
        ":go",
        ":py",
    ],
    deps = [
        "@pip//mlflow:pkg",
        "@rules_python//python/runfiles",
    ],
)
```

The `data` field in the conformance_test target means bazel will build those targets when it builds the test, and the test can access them at run-time. To access them, we use Bazel’s runfiles module. In my conformance_test, to access the “py” target I would write:

```python
import python.runfiles.runfiles
# converts relative path to absolute path
binary_path = python.runfiles.runfiles.Create().Rlocation(“_main/conformance/py”)
```

Unfortunately the documentation for runfiles in Bazel is currently pretty bad (as it is for many topics), but the basic workflow is:
Add the target for what you want to access at runtime (which can be a built binary, in this case our “py” and “go” targets) to the `data` field of the accessor’s target declaration (in this case the “conformance_test”).
In the accessor’s code (in this case conformance_test.py), use a Bazel runfiles library to access the file.

Typically the "rules_\<lang\>" module that provides Bazel support for a given language includes a library to access runfiles. The one I used in my python test is "@rules_python//python/runfiles".

Above I mentioned Bazel’s dependency management. In this case, the only thing a user needs to install is bazel. Then when the user runs `bazel test //conformance:conformance_test`, bazel will:
Download a specific version of the Go toolchain (compiler and linker)
Download a specific version of the Python interpreter
Download all external Go and Python dependencies
Use the above to build the needed targets
Runs the test

And this works on Linux, macOS, and Windows.

There you have it. Let me know if you find this useful.

[^1]: [Latest full source](https://github.com/Astera-org/mlflow-go/blob/master/conformance/conformance_test.py).

[^2]: Slightly modified from the real thing for clarity, [latest full source here](https://github.com/Astera-org/mlflow-go/blob/master/conformance/BUILD.bazel).
