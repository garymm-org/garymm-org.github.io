# garymm.org

Personal web site. Built on [Jekyll](https://jekyllrb.com/), with theme based on
[gwgundersen's](http://gregorygundersen.com/blog/2020/06/21/blog-theme).

To see local changes, run:

```sh
bundle exec jekyll serve --livereload --trace --incremental
```

To push to GitHub pages, run:

```sh
git push # push to master
env JEKYLL_ENV=production jgd
```

See <https://github.com/yegor256/jekyll-github-deploy/blob/master/README.md>.

## TODO:


* Notes of some kind:
    * Expanding ellipses like on <https://stratechery.com>
    * Or sidenotes like on Tufte theme
    * Or just footnotes
* I can't figure out how to make any changes to blog.css or blog.less!
* Auto-regenerate .css from less files using <https://github.com/zroger/jekyll-less>
* Would be nice to have the images have a slight margin on the left and right.
  I tried and didn't work:
    * setting this in a new `.wrapimg` in `blog.css`
    * adding a new `.wrap img` in `blog.css`
* Make the "discuss on twitter" look a bit nicer. Underline under the twitter logo.
