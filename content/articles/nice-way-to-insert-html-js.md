---
title: Nice Way to Insert HTML using Pure JavaScript
description: How to insert HTML using pure JS
updatedAt: December 30, 2018
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: Insert HTML JS
tags:
  - js
  - html
author:
  name: David Yu
  bio: I love to code
  img: /_nuxt/assets/content/davidthrone.jpg
---

Normally to insert html one would use the `innerHTML` function however it becomes a pain when you just want to append something because you would traditionally have to do something likes this `elem.innerHTML += '<div>hello world</div>'` This isn't too nice because you are actually taking all the existing html adding it to new html then using that html to replace the existing html. That is a bit confusing but think of it this way; if you have a sausage but you want a hot dog you would just go buy the bun. But in this case you are throwing away your sausage then going out to buy another sausage and bun.

There must be a better way :thinking:

**Introducing insertAdjacentHTML()**
No longer do you have to throw away your sausage for a hot dog. This function takes 2 parameters the first a position `"beforebegin", ""afterbegin", "beforeend", "afterend"` and the html you want to add. That's it!

`elem.insertAdjacentHTML("beforeend", '<div>hello world</div')`
