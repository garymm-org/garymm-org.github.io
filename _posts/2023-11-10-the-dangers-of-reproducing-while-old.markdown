---
layout: post
title: 'The dangers of reproducing while old'
date: '2023-11-10'
author: garymm
tags:
- parenting
- biology
- health
tweet_url: https://twitter.com/garymigu/status/1725388954508427553
hn_url: https://news.ycombinator.com/item?id=38300102
---

I had my first child when I was 36 years old, which made me want to understand the risks of having children at different ages. Before looking into this, my impression was that the main biological problems with old-age parenthood had to do with not having the necessary health and vigor to care for young’uns, and I had heard that older women have trouble getting pregnant. While those are real issues, there are many others worthy of consideration.

My read of the evidence is that the risks of miscarriage and serious health problems for children, including autism and birth defects, increase significantly with parental (both paternal and maternal) age. The data I could find for most risks is not very fine-grained and not very precise, but I think this qualitative description matches the data: Risks start rising at around 30 years old for both mothers and fathers, rises gradually through about 35 for mothers and 40 for fathers, and then sharply after that.

Interestingly, the ages at which things start to go wrong are similar for fathers and mothers, but the mechanisms are different. Sperm cells are produced throughout a man’s life, and each time a new cell is produced, there is a chance of a genetic mutation. Sperm are produced by copying the DNA of other short-lived cells, which are themselves produced in the same way, so mutations accumulate. Women’s egg cells, however, are all present when a woman is born, but over time they accumulate damage.

If this is correct, then there are two ways to reduce these risks: have kids when young, or use frozen gametes from your younger selves. If you’re already in the danger zone and don’t have frozen gametes, pre-implantation genetic testing may be able to screen out embryos that have certain genetic defects, and thus reduce the risk of some bad outcomes.

My advice:



* If you want to have kids at some later age, and that later age is >= 35 for a woman or >= 40 for a man, freeze your gametes ASAP.
* If you’re already past those age thresholds and you have the means, consider in-vitro fertilization so you can take advantage of pre-implantation genetic testing.

In “the dangers” section below I summarize some evidence on how parental age interacts with various risks. What’s not obvious is the relationship between the different risks. That is, are they mostly independent of each other, or is a child born with e.g., a heart defect much more likely to be autistic? They are not independent. For example, [Eide et al.](https://www.nature.com/articles/pr2006181) find a significant correlation between birth defects and intellectual disability. So if you want to know “what are the odds my kid comes out totally healthy”, I think just looking at the highest risk and ignoring the others is reasonable.

If you’re interested in the details supporting the above conclusions, read on.


## Technical jargon

Skip this if you know these terms.


### Prevalence

The prevalence is what fraction of the population has the outcome of interest. Basically:

(number of people with the outcome) / (number of people that were studied).


### Odds ratio

An odds ratio is a ratio of how likely the outcome of interest is in the condition of interest, to how likely it is in some reference condition. For the data below, the condition is always a particular parental age range, and the reference condition is some other age range that the researchers chose. For example, say we set the reference age to 25, and our outcome of interest is being born with green hair. If a study finds that children of fathers aged 30 have 1/10 odds of being born with green hair, and the children of fathers aged 25 have 1/100 odds of being born with green hair, then the odds ratio for age 30 is 1/10 / 1 / 100 = 10.


### 95% CI

A 95% CI (confidence interval) is a range of values. Under certain assumptions[^1] there is a 95% chance that the true value falls within that range.


## Pre-implantation genetic testing

Pre-implantation genetic testing is done on embryos that have been fertilized in-vitro before implanting them into a woman (more details [here](https://www.lesswrong.com/posts/yT22RcWrxZcXyGjsA/how-to-have-polygenically-screened-children#But_how_do_they_even_get_an_embryo_s_DNA_)). After developing for about 10 days, embryos have enough cells that some can be removed for genetic testing. [Sordia-Hernandez et al.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9674466/) look at the effects of testing for aneuploidy, which is a specific kind of genetic defect which often results in miscarriage or abortion. It finds significant benefits for women >= 35 years old, but not for younger women.

Note that for almost everything else, the outcome being tested for is bad, whereas here it is live birth rate, or the odds of a child being born alive after an embryo is transferred into a woman.


<table border="1">
  <tr>
   <td><strong>Mother’s age</strong>
   </td>
   <td><strong>Live birth rate odds ratio 95% CI (relative to no genetic testing)</strong>
   </td>
  </tr>
  <tr>
   <td>&lt; 35
   </td>
   <td>0.56, 1.34
   </td>
  </tr>
  <tr>
   <td>>= 35
   </td>
   <td>1.07, 2.84
   </td>
  </tr>
</table>


Very recently, some companies have started offering more in-depth genetic screening for embryos, such as assessing risk for polygenic traits, meaning influenced by many genes. The companies offering this service claim all sorts of benefits, such as reducing the risk of cancer and diabetes, but I don’t think it’s been independently evaluated, and it’s probably too new to truly evaluate, since there’s a very small number of people alive who were screened in this way. [Here’s Gene Smith's post](https://www.lesswrong.com/posts/yT22RcWrxZcXyGjsA/how-to-have-polygenically-screened-children) that’s very enthusiastic about such screening and tells you how to go about it, and [my response trying to summarize a skeptical position](https://www.lesswrong.com/posts/yT22RcWrxZcXyGjsA/how-to-have-polygenically-screened-children?commentId=uiFXXRpdXCzXjmfj8).

So if you’re older and you don’t have frozen gametes, should you do IVF just so you can do pre-implantation genetic testing?

Pros:



* Very effective at detecting aneuploidy, and thus increasing live birth rate per pregnancy.
* You can choose the child’s sex.
* If you opt for polygenic screening, it is possible to reduce other health risks and possibly improve other desirable traits like IQ. Again, see [Gene Smith’s post](https://www.lesswrong.com/posts/yT22RcWrxZcXyGjsA/how-to-have-polygenically-screened-children) for more details on this.
* I haven’t seen any strong evidence that IVF results in worse health outcomes. Note there are many studies that show worse outcomes for IVF, but since IVF is largely used by people who have fertility problems, and differences seem to disappear entirely when controlling for this. [More here](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3650450/).

Cons:



* Expensive in time and money (maybe $25,000 in 2023).
* Will be more expensive and / or less effective for women who produce fewer eggs per retrieval, which is mostly older women.
* There is [some evidence](https://academic.oup.com/humupd/article/25/2/137/5316072?login=false) that IVF results in differences in the embryo that might possibly result in less healthy people (vs old-fashioned conception). I think the odds that this results in worse outcomes are quite low, but it’s worth mentioning.


## The dangers


### Miscarriage

This chart from [Magnus et al.](https://www.bmj.com/content/364/bmj.l869) shows the absolute risk by mother’s age. Y-axis is the proportion of pregnancies that end in miscarriage:

{%
   picture
   2023-11-10-the-dangers-of-reproducing-while-old/maternal-miscarriage.jpg
   --alt absolute risk of miscarriage by maternal age
   --img class="wrap"
%}

And here’s some data from [du Fossé et al.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7456349/) on the risk by father’s age. For the absolute risk, I assumed the absolute risk for the reference age is 10%, which seems to be about the value for a 27 year old woman from the chart above.


<table border="1">
  <tr>
   <td><strong>Father’s age</strong>
   </td>
   <td><strong>Odds ratio 95% CI</strong>
   </td>
   <td><strong>Absolute risk 95% CI</strong>
   </td>
  </tr>
  <tr>
   <td>25-29
   </td>
   <td>reference
   </td>
   <td>10%
   </td>
  </tr>
  <tr>
   <td>30-34
   </td>
   <td>0.9, 1.21
   </td>
   <td>9%, 12.1%
   </td>
  </tr>
  <tr>
   <td>35-39
   </td>
   <td>0.92, 1.43
   </td>
   <td>9.2%, 14.3%
   </td>
  </tr>
  <tr>
   <td>40-44
   </td>
   <td>1.06, 1.43
   </td>
   <td>10.6%, 14.3%
   </td>
  </tr>
  <tr>
   <td>>= 45
   </td>
   <td>1.13, 1.81
   </td>
   <td>11.3%, 18.1%
   </td>
  </tr>
</table>



### Autism


#### Prevalence

People with a huge range of abilities and tendencies are all diagnosed with autism, and there’s a lot of debate about the accuracy of many diagnoses. However “profound autism” is a diagnosis with much clearer criteria. [Hughes et al.](https://www.researchgate.net/publication/370128310_The_Prevalence_and_Characteristics_of_Children_With_Profound_Autism_15_Sites_United_States_2000-2016) defined profound autism “as children with autism who were either nonverbal or minimally verbal or had an (intelligence quotient) IQ &lt;50”. That study estimated the prevalence of profound autism in the USA as:


<table border="1">
  <tr>
   <td>Female
   </td>
   <td>1.88 / 1000 = 1 / 532
   </td>
  </tr>
  <tr>
   <td>Male
   </td>
   <td>7.18 / 1000 = 1 / 139
   </td>
  </tr>
  <tr>
   <td>Overall
   </td>
   <td>4.59 / 1000 = 1 / 218
   </td>
  </tr>
</table>


These numbers seem shockingly high, but they do somewhat match my casual observations. I don’t know a lot of children, but I know of at least 2 profoundly autistic boys.


#### Risk by parental age

The studies I found on the impact of parental age did not restrict themselves to just profound autism, so it’s possible that parental age interacts with profound autism differently, but my guess is it’s at least qualitatively correct.

Here are the results from [Durkin et al.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2638544/), who looked at both the father’s and mother’s ages. For the absolute risk for fathers, I used the number of autism spectrum disorder cases / size of the “Birth Chort Comparison Group” for the father’s or mother’s reference age, extracted from table 3 of the paper. For fathers that’s 322 / 67,080 = 0.48%. For mother’s that’s 366 / 75,053 = 0.49%. These numbers are close to the overall risk of profound autism from Hughes et al. above, but this study considered any autism diagnosis, so something is probably wrong either with my calculation or with one or both of these studies.


<table border="1">
  <tr>
   <td><strong>Father’s age</strong>
   </td>
   <td><strong>Odds ratio 95% CI</strong>
   </td>
   <td><strong>Absolute risk 95% CI</strong>
   </td>
  </tr>
  <tr>
   <td>&lt;20
   </td>
   <td>0.4, 1.0
   </td>
   <td>0.19%, 0.48%
   </td>
  </tr>
  <tr>
   <td>20-24
   </td>
   <td>0.7, 1.1
   </td>
   <td>0.34%, 0.53%
   </td>
  </tr>
  <tr>
   <td>25-29
   </td>
   <td>Reference
   </td>
   <td>0.48%
   </td>
  </tr>
  <tr>
   <td>30-34
   </td>
   <td>0.9, 1.2
   </td>
   <td>0.43%, 0.58%
   </td>
  </tr>
  <tr>
   <td>35-39
   </td>
   <td>0.9, 1.3
   </td>
   <td>0.43%, 0.62%
   </td>
  </tr>
  <tr>
   <td>>= 40
   </td>
   <td>1.1, 1.8
   </td>
   <td>0.53%, 0.86%
   </td>
  </tr>
</table>



<table border="1">
  <tr>
   <td><strong>Mother’s age</strong>
   </td>
   <td><strong>Odds ratio 95% CI</strong>
   </td>
   <td><strong>Absolute risk 95% CI</strong>
   </td>
  </tr>
  <tr>
   <td>&lt;20
   </td>
   <td>0.5, 1.0
   </td>
   <td>0.25%, 0.49%
   </td>
  </tr>
  <tr>
   <td>20-24
   </td>
   <td>0.8, 1.1
   </td>
   <td>0.39%, 0.54%
   </td>
  </tr>
  <tr>
   <td>25-29
   </td>
   <td>Reference
   </td>
   <td>0.49%
   </td>
  </tr>
  <tr>
   <td>30-34
   </td>
   <td>0.9, 1.3
   </td>
   <td>0.44%, 0.64%
   </td>
  </tr>
  <tr>
   <td>>= 35
   </td>
   <td>1.1, 1.6
   </td>
   <td>0.54%, 0.64%
   </td>
  </tr>
</table>


Note from paper: “Because the increased risk was similar for ages 35–39 and ≥40 years, the high-risk maternal age category was defined as ≥35 years.”

And here are results from [another study](https://doi.org/10.1038/mp.2010.121) that looked only at the father’s age:


<table border="1">
  <tr>
   <td><strong>Father’s age</strong>
   </td>
   <td><strong>Odds ratio 95% CI</strong>
   </td>
  </tr>
  <tr>
   <td>15-29
   </td>
   <td>Reference
   </td>
  </tr>
  <tr>
   <td>30-39
   </td>
   <td>1.0, 1.42
   </td>
  </tr>
  <tr>
   <td>40-49
   </td>
   <td>1.07, 1.87
   </td>
  </tr>
  <tr>
   <td>>= 50
   </td>
   <td>1.26, 3.88
   </td>
  </tr>
</table>


This chart shows absolute risks from that same study:

{%
   picture
   2023-11-10-the-dangers-of-reproducing-while-old/paternal-autism.png
   --alt absolute risk of autism by paternal age
   --img class="wrap"
%}

### Chromosome disorders


#### Prevalence

[Caron, Tihy, and Dallaire](https://pubmed.ncbi.nlm.nih.gov/9934980/) find that of mothers aged >= 35,  1.79% or 1 / 55 have a chromosomal disorder in the second trimester. Note that some chromosome disorders result in miscarriage earlier than that, so the true prevalence is certainly higher.


#### Risk by parental age

To compute absolute risk, I took the prevalence number from above and then divided it by 5.66 (the middle of the odds ratio CI for mothers aged >= 35) to get 1.79 % / 5.66 = 0.32%.


<table border="1">
  <tr>
   <td><strong>Father’s age</strong>
   </td>
   <td><strong>Odds ratio 95% CI</strong>
   </td>
   <td><strong>Absolute risk 95% CI</strong>
   </td>
  </tr>
  <tr>
   <td>&lt;20
   </td>
   <td>1.01, 1.89
   </td>
   <td>0.32%, 0.60%
   </td>
  </tr>
  <tr>
   <td>25-29
   </td>
   <td>reference
   </td>
   <td>0.32%
   </td>
  </tr>
  <tr>
   <td>>= 40
   </td>
   <td>1.12, 1.52
   </td>
   <td>0.36%, 0.49%
   </td>
  </tr>
</table>


From [Fang et al.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7803514/)


<table border="1">
  <tr>
   <td><strong>Mother’s age</strong>
   </td>
   <td><strong>Odds ratio 95% CI</strong>
   </td>
   <td><strong>Absolute risk 95% CI</strong>
   </td>
  </tr>
  <tr>
   <td>&lt;20
   </td>
   <td>0.54, 0.88
   </td>
   <td>0.17%,	0.28%
   </td>
  </tr>
  <tr>
   <td>20-34
   </td>
   <td>reference
   </td>
   <td>0.32%
   </td>
  </tr>
  <tr>
   <td>>= 35
   </td>
   <td>5.13, 6.2
   </td>
   <td>1.64%,	1.98%
   </td>
  </tr>
</table>


From [Ahn et al.](https://obgyn.onlinelibrary.wiley.com/doi/10.1111/aogs.14339)


### Urogenital defects


#### Prevalence

1.60 / 1000 = 1 / 625. [Source](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6472003/).


#### Risk by parental age

I didn’t find an easy way to calculate absolute risk.


<table border="1">
  <tr>
   <td><strong>Father’s age</strong>
   </td>
   <td><strong>Odds ratio 95% CI</strong>
   </td>
  </tr>
  <tr>
   <td>&lt;20
   </td>
   <td>1.03, 2.19
   </td>
  </tr>
  <tr>
   <td>25-29
   </td>
   <td>reference
   </td>
  </tr>
  <tr>
   <td>>= 40
   </td>
   <td>1.07, 1.52
   </td>
  </tr>
</table>


From [Fang et al.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7803514/)


<table border="1">
  <tr>
   <td><strong>Mother’s age</strong>
   </td>
   <td><strong>Odds ratio 95% CI</strong>
   </td>
  </tr>
  <tr>
   <td>20-34
   </td>
   <td>reference
   </td>
  </tr>
  <tr>
   <td>>= 35
   </td>
   <td>1.13, 1.89
   </td>
  </tr>
</table>


From [Ahn et al.](https://obgyn.onlinelibrary.wiley.com/doi/10.1111/aogs.14339)


### Heart defects


#### Prevalence

137.1 / 10,000 = 1 / 73. [Source](https://www.sciencedirect.com/science/article/pii/S0002870314004980).

Note: this seems really high to me. Maybe most of these are not very serious, or maybe I know people who were born with heart defects but I don’t know they have them.


#### Risk by parental age

I didn’t find an easy way to calculate absolute risk.


<table border="1">
  <tr>
   <td><strong>Father’s age</strong>
   </td>
   <td><strong>Odds ratio 95% CI</strong>
   </td>
  </tr>
  <tr>
   <td>&lt;20
   </td>
   <td>0.96, 1.16
   </td>
  </tr>
  <tr>
   <td>25-29
   </td>
   <td>reference
   </td>
  </tr>
  <tr>
   <td>>= 40
   </td>
   <td>1.01, 1.2
   </td>
  </tr>
</table>


From [Fang et al.](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7803514/)


<table border="1">
  <tr>
   <td><strong>Mother’s age</strong>
   </td>
   <td><strong>Odds ratio 95% CI</strong>
   </td>
  </tr>
  <tr>
   <td>&lt;20
   </td>
   <td>0.79, 1.1
   </td>
  </tr>
  <tr>
   <td>20-34
   </td>
   <td>reference
   </td>
  </tr>
  <tr>
   <td>>= 35
   </td>
   <td>1.06, 1.24
   </td>
  </tr>
</table>


From [Ahn et al.](https://obgyn.onlinelibrary.wiley.com/doi/10.1111/aogs.14339)


<!-- Footnotes themselves at the bottom. -->
## Notes

[^1]:
    Which scientists sometimes violate and thus invalidate their own results, but for now I’m just assuming these stats are sound.
