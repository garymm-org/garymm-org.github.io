---
layout: post
title: 'Kagi and Google web search results: a personal evaluation'
date: '2024-08-17'
author: garymm
tags:
- internet
- information
- computers
- search
permalink: /blog/2024/08/17/kagigoogle/
---

[Kagi](https://kagi.com) is a relatively new search engine. Unlike Google, it makes money through user subscriptions and shows no ads.
Despite having decreased my usage of web search since the release of ChatGPT, I still use it a lot, and would be willing to pay a few
bucks a month for a significantly better experience. To evaluate Kagi, I put 75 of my recent search queries into Kagi and Google and rated
which I preferred. The queries spanned various topics, heavily tilted towards software engineering and computer topics.

## Summary

After this experiment I've decided to pay for Kagi[^1] and set it as my default search engine on both my phone and laptop.

Here's a qualitative comparison and some thoughts:

* When Google shows ads on my phone, it really hurts the experience since it takes up the whole screen (often two screens of scrolling) and the ads are very very rarely relevant (with the exception of Google shopping results, which are sometimes relevant). On desktop the ads are a minor annoyance since I typically can still see the non-ad results without scrolling, and in general when I'm using my laptop I'm in less of a hurry. However maybe only 1/10 of my queries trigger non-Google-shopping ads. Probably because many of my queries are very specific and technical. As noted, Kagi doesn't show any ads ever.
* Google is better at extracting relevant information (either from web results or structured data like stock prices) and putting it at the top of the search results. For Kagi this information is usually in the pages that are at or near the top, but it takes an extra click to get it. E.g. a graph of a stock's price.
* Kagi shows more results from somewhat obscure, non-commercial sites and blogs. For some of my queries, these sites had excellent content that I would be very unlikely to find via Google.
* Google has a lot of features that I don't care about that you might (for example, live sports scores).
* I didn't thoroughly evaluate queries where I was trying to buy products online. Kagi doesn't have a shopping search feature, and I expect I will probably continue to use Google shopping in addition to other sites to shop.

Having worked at Google on search and seen how much human ingenuity and money went into building it, it's pretty shocking
that a [37 person](https://blog.kagi.com/what-is-next-for-kagi) (as of 2024-04) company can compete at all, but here we are!


## Detailed results

* Tie: 47 / 75
* Strongly prefer Google: 3 / 75
* Strongly prefer Kagi: 4 / 75
* Weakly prefer Google: 11 / 75
* Weakly prefer Kagi: 10 / 75

### Google big wins

* "bryant controlbox google home". [This reddit post](https://www.reddit.com/r/smarthome/comments/j32rkz/bryant_evolution_connex_connect_talking_to_other/) is the only satisfying result on either, and it's in the first few results for Google but not for Kagi.
* "piedmont california front setback requirements". Google has an "AI Overview" with the answer (which appears to have been extracted from a PDF). Kagi's top result doesn't have the answer on the page, though it does link to the PDF that contains the answer. It would take at least a minute of careful reading of the page that Kagi returned to figure out which link to click to get the right PDF, and then loading and searching in the PDF might take another minute.
* "intc stock". Google has a nice interactive graph. Kagi has some data (like current price, 52 week range), but I like the interactive graph more.


### Kagi big wins

* "lugg movers". Google starts with several ads for other companies (competitors to Lugg I assume). On my phone, I needed to scroll down two full screens to get past the ads to the actual result I wanted. Kagi had no ads, and had the official Lugg page (which is what I wanted) at the top.
* "josefk simt". Kagi returned exactly what I wanted, which was [this page from "yosefk.com"](https://yosefk.com/blog/simd-simt-smt-parallelism-in-nvidia-gpus.html) even though I misspelled the domain name in the query. Google seems to have decided there were not enough relevant results for my whole query so it searched for just "josefk" and then noted next to each of the results that the result is "`Missing: simt`".
* "how to value startup options". On Desktop, Google starts of with 4 ads which are totally irrelevant to what I wanted (though on my phone it didn't show any ads). After that it had an AI summary which seemed reasonable and itself linked to some pretty good results. After that it had some decent web results. Kagi had no ads and had some of the same results as Google, but only Kagi had [this gem](https://www.benkuhn.net/optopt/) from Ben Kuhn near the top. Reading that lead to lots of other relevant links on that same site.
* "union find algorithm": Google's top result is GeeksforGeeks, which has relevant info but is not presented particularly well and the page has a huge amount of annoying animated ads. Google's second result is Wikipedia. Kagi links to Wikipedia first, and second to [this page](https://labuladong.gitbook.io/algo-en/iv.-high-frequency-interview-problem/union-find-explanation) which has no ads and has nice illustrations of the algorithm.

[^1]: Currently $54 / year for the starter plan, which includes 300 searches / month. This does seem kind of low, but I have been using ChatGPT, Claude and Copilot a lot more, and I actually should probably be using them even more, so maybe this limit will be a useful nudge.

