---
title: Should You Use Serverless?
description: Is serverless worth to use?
updatedAt: January 1, 2019
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: Serverless
tags:
  - serverless
  - discussion
author:
  name: David Yu
  bio: I love to code
  img: require(~/assets/content/davidthrone.jpg)
---

## Answer

Definitely worth a look but still immature, difficult to debug and community/documentation underdeveloped. I would stick with your favourite backend framework still. It fits very well with microservices and the potential cost reductions are huge.

## Let us take a look at Serverless for a bit

The term serverless does not mean there is no server rather there is just less server. AWS was the first provider to offer something like this with _lambda_ functions around 2015/2016. This service allowed developers to create an endpoint or api in their language of choice without a cumbersome backend framework. The idea was very simple, if you had an endpoint like this https://endpoint.domain it would correspond to some lambda function that would process the request. The main benefit here is the tight integration with the rest of AWS's serverices like Cognito (Authentication service) and DynamoDB and cost savings as you are not billed when no one is using your site. In constrast all other web hosts will bill you regardless, for example Digital Ocean charges a flat fee every month. Also it is much easier to scale. This sounds rather appealing but here are the killers for me.

Underdeveloped community will be the main reason I won't be going for serverless this time around. The community provides support and helpful tools to aid in your development. This is especially important to those without much experience. In addtion Serverless is only really offered by the major cloud providers AWS, Azure, GCP. These cloud providers are nortourious for their complicated dashboards and poor documentation. Their target audience is mainly large companies so the lone developer is kind of left out. (In saying so they have made efforts to improve this aspect but by their very nature they are still very complicated beasts, just try deploy a web app on one of these platforms. You will probably get lost half way.) That is why you really need a community to help you out with serverless applications.

Here is an example of a problem you would face. I encountered an error where a lambda function would not execute correctly. Here is the code

```js
exports.handler = (event, context, callback) => {
  console.log(event)
  if (!event.requestContext.authorizer) {
    errorResponse(
      'Authorization not configured',
      context.awsRequestId,
      callback
    )
    return
  }
}
```

For some reason `event.requestContext` returned undefined. I wanted to figure out what `requestContext` even was but couldn't find anything about it in the docs or online.

There are other issues I have with Serverless. I feel as though complicated applications would be difficult to express with just stateless functions hosted in the cloud. Even if you could, an inexperienced dev wouldn't know how. That is where I see the main benefit of > convention over configuration frameworks like Rails, Laravel and ASP Net it helps inexperienced devs structure and create large production applications. Serverless is just a more extreme version of Express so it isn't really suitable for new devs build production apps.

## Closing Remarks

It is important not to get swept up in the latest craze even if all the respected people in the community are hyping it up. Most likely the best path would be to stick with what you know. It requires a lot of effort to switch from one language to another and same applies for frameworks. Building maintainable, stable, scalable production software is hard period. I don't care if you have a year of experience or 20 years you can never get everything righ. Sticking with what you know just makes things a little easier.
