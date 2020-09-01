---
title: Weekly Learnings May 17th
description: Weekly learnings for the 17th of May 2019
updatedAt: May 17, 2019
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

## Testing and Debugging

You can use `debugger` statement to breakpoint an application. Just open dev tools first then run the application and it will breakpoint on the `debugger` line. This is useful to inspect the state of the application.

Cypress makes testing a lot easier and I will be using it as an replacement for jest puppeteer. Might be really useful to scrape websites even though the website explicitly says not to. I don't usually like to recommend changes to your tech stack but I think the better developer experience through their interactive testing environment, in depth, clear and concise documentation and the ability to finally write e2e code that actually works the way you expect it to is a game changer for me so I will adopt it from now on.

```js
cy.visit('http://google.com')
cy.contains('google')
```

The above code is used to see if the word `google` exists in the webpage that is loaded. This code actually works imagine how hard this would have been in other e2e testing frameworks. Firstly you have to await that shit then you would have to handle the case that the word google could have been loaded after the main page load so you have to some how handle that too. And after all that it still might not work :/.... Cypress really does live up to their claim that they are >fixing frontend testing because it has been broken for a long time.

## Formatting and linting

You should always use lint-staged with husky to format/lint your code before it is committed. You don't want to be seeing formatting changes in your diff. It just adds noise and makes it harder to compare actual changes in code.

Eslint with prettier always has conflicting issues. However doing this seems to fix it.

```
{
  "extends": ["prettier"],
  "plugins": ["import"],
  "globals": {
    "expect": true,
    "test": true,
    "describe": true,
    "afterEach": true,
    "beforeEach": true
  },
  "parser": "babel-eslint"
}
```

`yarn add --dev eslint-config-prettier babel-eslint`

## File structure and project and organisation

I used to hold the opinion that we should keep things in separate repos e.g. frontend and backend in different repos but now I think for small teams we should always keep them in on repo. My original reason was to just make it easier to develop since you can run your npm/yarn commands in the top level but you don't need seperate repos to do that. Just open the folder of the project. For example instead of opening the whole repo in VSCode just open the frontend folder.

However for large teams I think it still makes sense for separate repos because logically you want the teams to not have to depend on each other.

## Microsoft authentication integration using MSAL js library

Historically Microsoft documentation has been incredibly painful to read, because it is too verbose. We just want them to get to the point and tell us exactly what should be done. So here is how I would implement Microsoft logins with your own app.

First make the user authenticate with Microsoft using the MSAL js library. You will first get their `idtoken` then using the idtoken and MSAL library you acquire the access token. You can now use that token to authenticate the user and give them access to protected resources. For example in the backend when a request comes to access some data, you grab their access token they pass through in the request then you hit this endpoint https://graph.microsoft.com/v1.0/me. If successful the will return the user data if not a 401 status will be returned.

## Typings

Typings in JS like typescript is good. For both readability and developer experience. Autocompletion, code signatures are more detailed, less bugs. The biggest barrier I see is it just makes programming just a bit harder and can slow you down in some scenarios especially when you first start out using typescript.

## Dynamo db + serverless + graphql should you use?

Dynamo db seems to be coupled with AWS which I am not a fan off. Anyone who knows me will know I dislike large cloud providers because their tools are complicated and their documentation is poor. Their target audience are large enterprises not independent developers. Overall the stack is fine but no real reason to use it for most developers. Why battle to figure out a new stack when your existing one is fine?
