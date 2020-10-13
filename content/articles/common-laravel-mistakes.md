---
title: Simple Common Laravel Mistakes
description: Common mistakes for Laravel
updatedAt: December 30, 2018
img: https://images.unsplash.com/photo-1517852058149-07c7a2e65cc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60
alt: Common Laravel Mistakes
tags:
  - laravel
  - common-mistakes
author:
  name: David Yu
  bio: I love to code
  img: /_nuxt/assets/content/davidthrone.jpg
---

1. Everything looks bigger in production but in local environment everything is sized correctly.
- Zoom level is different for the web pages

2. The webserver is failing silently there is no log errors but the page doesn't load
- CSRF token is not being passed in the form

3. The data is not being saved to the database but all the data is there just not being saved
- The elements have not been whitelisted e.g. fillable

4. Jquery is not changing the data on screen but I am sure the code is right
- Check that the targeted code is in a async call or not if it is you have to wait for the async operation to finish before you can start manipulating the code
