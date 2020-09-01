---
title: GraphQL Hype
description: What's the hype around GraphQL
updatedAt: April 26, 2019
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: GraphQL
tags:
  - graphql
author:
  name: David Yu
  bio: I love to code
  img: require(~/assets/content/davidthrone.jpg)
---

Facebook initially developed GraphQL for internal consumption in 2012/2013 before publicly releasing it in 2015 and subsequently moved it to a foundation hosted by the non-profit Linux Foundation. Since then it has gained a lot of developer attention and many influential companies and people have used it in production.
<nuxt-image file="graphql-companies.png" alt="Companies that use GraphQL" />
The question is should you as a developer use it? As with most new technologies the answer is probably not. If you have read my previous articles there is a common theme about new things. **If it doesn't solve a major problem for you then you should not use it in your next project.** That doesn't mean you shouldn't use it at all but rather if you have a professional project where people depend on you its always best to stick with what you are familiar with. Why? The answer is obvious, you will likely encounter many bugs, challenges, quirks once you start developing a real app. This will decrease your productivity and quality of your software. The end user isn't going to care about what fancy technology you are using, what they do care about is whether your software solves their business problem.

So with that caveat out of the way lets take a look at GraphQL.

## A quick overview

I think the best way to look a technology is just to get stuck in with the code and see for yourself how it behaves at an implementation level then we can talk about some more fluffy stuff once you get the basics out of the way.

### Define the Schema of your data

This is like defining your tables in a relational database. Note that you may still have to do this depending on how low level you want to go but we will just focus on GraphQL for now.

Syntax for writing schemas is called [Schema Definition Language](https://www.prisma.io/blog/graphql-sdl-schema-definition-language-6755bcb9ce51) (SDL)

```gql
type Person {
  name: String!
  age: Int!
  posts: [Post!]!
}

type Post {
  title: String!
  author: Person!
}
```

### Querying for data

We use a similar syntax to retrieve the exact data we want

```gql
{
  allPersons {
    name
  }
}
```

Returns data in the following structure

```gql
"data": {
    "allPersons": [
        {
            "name": value1
        },
        {
            "name" value2
        },
        ...
    ]
}
```

Even though we have other fields for the `Person` data type we don't get them back because we didn't ask for it.

```gql
{
  allPersons {
    name
    age
  }
}
```

Example response

```gql
"data": {
    "allPersons": [
        {
            "name": value1,
            "age": value2
        },
        {
            "name": value3,
            "age": value4
        }
    ]
}
```

### Altering data

In rest we have the idea of CRUD operations where every resource normally has CRUD operations associated with them. So for the `Person` resource it would have a create enpoint, read endpoint, update endpoint, delete endpoint. In GraphQL we have mutations to alter data.

```js{2,4}
mutation {
    createPerson(name: 'Bob', age: 10) {
        name
        age
    }
}
```

returns

```
{
    "data": {
        "createPerson": {
            "name": "Bob",
            "age": 10
        }
    }
}
```

The idea is that we call the `createPerson()` function but what is cool in this case is that this is like an endpoint in REST but we can use programming like syntax (A function call) to access the server's API. Again we can sepcify exactly what we want back from the server, in this case it is `name` and `age`.

This is JSON like syntax, the `!` means that the data field is required. We can easily define a relationship by referencing the type in this case there is a one-to-many relationship with `Person` and `Post`

### Resolvers

The biggest question now would be how is the data actually being retrieved. Remember GraphQL not only serves as a query language for the client but also it can be a layer on top of your database or other APIs.

When we send a query like this

```js
{
    author(id: 'abc') {
        posts {
            title
            content
        }
    }
}
```

we can imagine that each field i.e. `author`, `name`, `age` has a datatype associated with it. Now if we could return data for each field then that would satisfy the query right? Because we would get all our data that we want back. So in essence the query is asking for this.

```js
{
    author(id: 'abc'): Author {
        posts: [Post] {
            title: String
            content: String
        }
    }
}
```

So if we could write some code that would get (resolve) each field that would be great

### Advantages

- **Typed** - This is really cool if you are used to just json getting passed into your functions you will likely have to write additional validation to verify the data is correct. By having types of the data getting passed in you get to have some free validation. Types also have many other benefits such as autocompletion for your IDE and arguably makes your code easier to reason with because at a glance when we a look at a function we know what exactly the inputs and outputs are.

- **Flexibility** - Unlike monolithic frameworks like ASP.NET and Laravel GraphQL is closer to express (in fact you can run GraphQL with express) where it is less opinionated on how you do things. This can be a double edged sword because it could lead to more boiler plate code

- **Efficient** - This is an arguable one because with a well design REST API they can be just as efficient but it is harder to achieve. By efficient I mean less data being transported across the wire and less HTTP requests being opened. There is less data being transported because on the client side we define the exact data that we want using GraphQL's query language. This is in contrast to how normal APIs behave where they normally return you more data then you need, usually you would have to specify filters to stop the API from doing that but it is not as expressive as GraphQL. Opening HTTP connections is pretty expensive and there is actually a limit on the number of HTTP connections a browser can have at once (~10 from memory) however GraphQL only uses one HTTP request to retrieve all your data. Actually all requests in GraphQL are done with the same endpoint.

- **Modern with great tooling** This is my personal favourite about GraphQL we have built around this technology, providing some of the best tools and services I have ever seen for a web technology. GraphQL playground allows us to quickly discover the API and construct the exact query we want. In constrast writing the correct SQL statement or ORM statement is much harder. This doesn't mean its dead simple to construct the correct GraphQL it just means our life is a little easier. There also exists some very nice services that provide a full GraphQL API fromt the schema we provide. Some examples are hasura, prisma and graphcool.

### Disadvantages

- **Too low level** - I touched on this point a bit in the flexibility point under advantages but the biggest killer for me is this. Now this is why you shouldn't always follow the big players in the tech industry because their resources and teams are different to the majority of tech companies out there. Most of us work in small teams and in small companies where time and resources are very important. We operate under conditions where we have to be highly productive while producing high quality software with a small team or even no team at all.

GraphQL reminds me of Express in the sense where it is an unopinionated framework giving the developer the freedom to implement their own authentication and file structure. As a consequence we have to implement or utilise third party libraries for lower level features that you would normally get for free from other frameworks e.g. ORMs, database migrations, testing, authentication, authorisation, validation, error handling, security. This is fine if you have the time, resources and knowledge within your team but if you don't dangerous consequences could arise besides wasting a lot of time trying to integrate all these dam third party libraries. For example security, if you have a lot of freedom and you don't know what you are doing it is very easy to introduce security vulnerabilities e.g. forgetting to not protect an endpoint.

Having said all that there are reliable services that build upon GraphQL that remove a lot of the boilerplate for us. I think these services are probably more suitable for the majority of developers. https://hasura.io/ & https://www.prisma.io/ & https://tipe.io/ (If ever it is going to be released)

- **Security** - Now this isn't something inherent in GraphQL but this is a concern this you get a lot of power and flexibility. This follows on from GraphQL being too low level. You require an in depth knowledge in GraphQL to start building production applications. For example a common problem is that a cyclic query is executed by the client. This will take up a lot of resources and potentially take down your server. Due to the incredible flexibility GraphQL provides to clients this opens up interesting attack vectors. Rate limiting is also different because we no longer use multiple HTTP calls anymore. Here is a real world example of how they deal with rate limiting in GraphQ context https://developer.github.com/v4/guides/resource-limitations/

- **Server side caching** - It is still not as easy as REST to implement caching in the backend because we do not know what the client will request

## Architecture

1. GraphQL server connected to a database
2. GraphQL server that is a thin layer in front of a number of other systems/APIs
3. Hybrid where it has a connected database and also connects to other APIs

## Interesting facts

- GraphQL is transport layer agnostic which means we can use it over any network layer protocol so it can be used over HTTP, Websockets, TCP
