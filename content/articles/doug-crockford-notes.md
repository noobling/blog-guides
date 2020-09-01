---
title: Douglas Crockford Notes
description: Notes on the ideal programming language by Douglas Crockford
updatedAt: December 30, 2018
img: https://upload.wikimedia.org/wikipedia/commons/2/24/Douglas_Crockford%2C_February_2013.jpg
alt: Douglas Crockford
tags:
  - ideal-programming-language
  - javascript
author:
  name: David Yu
  bio: I love to code
  img: /_nuxt/assets/content/davidthrone.jpg
---

https://www.youtube.com/watch?v=NPB34lDZj3E
Talks about the ideal programming language. Introduces some interesting ideas

- 0.1 + 0.2 should equal 0.3 but for 20 years we still haven't been able to solve this simple problem. He proposes a solution https://github.com/douglascrockford/DEC64
- We should remove the clutter
  - Take out null
  - Take out var
  - Take out single quotes
  - Take out tabs
- Pure functional programming languages have some great benefits in terms of making programming easier and performance
- IndexOf should return a null or undefined rather than -1
- Callbacks should be the first argument to allow for an indefinite number of arguments
- Should not have camel case or snake case but words with spaces o.O

https://crockford.com/javascript/popular.html

- Javascript was a language that was
  > "slapped together at Netscape, and then copied elsewhere. Given the process that created JavaScript and made it a de facto standard, we deserve something far worse."

> But despite JavaScript's astonishing shortcomings, deep down, in its core, it got something very right. When you peel away the cruft, there is an expressive and powerful programming language there. That language is being used well in many Ajax libraries to manage and augment the DOM, producing an application platform for interactive applications delivered as web pages. Ajax has become popular because JavaScript works. It works surprisingly well.

> Its better to be lucky than smart
