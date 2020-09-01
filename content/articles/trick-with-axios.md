---
title: Little Trick with Axios
description: Tricks with Axios
updatedAt: December 30, 2018
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: Little tricks with axios
tags:
  - axios
  - javascript
author:
  name: David Yu
  bio: I love to code
  img: require(~/assets/content/davidthrone.jpg)
---

Without a doubt Axios is a great HTTP client library. It simplifies and improves http requests although the new es6 http calls are nice in there own right. Something I missed with jquery's ajax calls was the `.always` method that would always execute regardless of the success of the call. Axios doesn't have such a method but you can simulate it with this handy trick.

```js
axios
  .post(endpoint, {
    data: data
  })
  .then((response) => {})
  .catch((error) => {})
  .then(() => {
    // always executed
  })
```
