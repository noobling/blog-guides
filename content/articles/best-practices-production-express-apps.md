---
title: Best Practices for Express Apps
description: Best practices in production Express apps
updatedAt: December 30, 2018
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
tags:
  - express
  - best-practices
alt: Best Practices Production Express Apps
author:
  name: David Yu
  bio: I love to code
  img: /_nuxt/assets/content/davidthrone.jpg
---

## Process managers

- Automatically restart app
- Performance metrics
- Modify settings dynamically to improve performance
- Control clustering

### Examples

#### Forever

Simple cli to that runs a script continuously forever. Good for small apps.

#### PM2

Production process manager that has a built in load balancer. Allows applications to be up forever with no downtime

#### Strong Loop Process Manager

- Build, package and deploy your Node.js app to local or remote system
- View CPU profiles and heap snapshots to optimize performance and diagnose memory leaks
- Keep processes and clusters alive forever
- Unify multiple StrongLoop PMs to a distributed mircoservices runtime that is managed from Arc

### Security Best Practices

- Don't use a deprecated or vulnerable versions of Express and Node
- Use TLS
- Use Helmet
- Use cookies securely
- Ensure dependencies are secure
- Avoid other known vulnerabilities

#### TLS

Encrypts data before it is sent from the client to the server. Preventing some common and easy hacks. TLS is the next progression of SSL

#### Use Helmet

Prevents some well known web vulnerabilities by setting HTTP headers appropriately

#### Use cookies securely

- Don't use in memory storage in production
- Don't use default session cookie name
  - `app.use(session({name: 'notdefaultsessionidname'})`
  - Helps prevent attacks from discovering what framework is used
- Set cookie security options
  - `app.use(session({name: 'session', cookie: { secure: true, httpOnly: true, domain: 'example.com', path: 'foo/bar', expires: expiryDate})`

#### Ensure your dependencies are secure

- Use snyk to check for vulnerabilities in your app

### Performance and reliability

- Use gzip compression
- Don't use synchronous functions like console.log
- Handle exceptions properly
  - Node app crashes from uncaught exception
  - use try-catch and promises
  - next() function propagates errors through the middleware chain
- Set node env to production
- Ensure app auto restarts on failure, if all exceptions properly handled the app should not crash however as a fail safe this should be added.
