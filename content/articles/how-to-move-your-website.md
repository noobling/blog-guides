---
title: How to move your website to a new hosting provider
description: Website hosting providers and switching
updatedAt: January 27, 2019
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: Website hosting
tags:
  - website
  - hosting
author:
  name: David Yu
  bio: I love to code
  img: require(~/assets/content/davidthrone.jpg)
---

There will always come a time when you need to move your website or more likely your database to another hosting platform. For example you find a provider that offers a better deal or service. This is generally a dreaded experience because A) You are not a dev ops expert B) One wrong move and everything blows up. C) You can't Google your way out of it. I have devised a list of steps that covers the general things that I have come up with moving websites around over the years (so don't expect it to cover everything).

1. **Don't delete your existing website until you are sure everything is working!**
2. **Export your database as a SQL dump or the native format for your database.** You are going to have to brush up on some basics of your database to do this correctly. It is very common for your exported dump to not work on the new database server because of different configurations.
3. **Create a new instance of a web server on the new hosting provider** This could range from simple to complex depending on whom you choose. Generally it will fall between Now (simple) -> AWS (hard)
4. **Add the environment variables** Now you could do this a number of ways like a `.env` file or ssh into the remote machine and add them manually or through the web interface. The important part is that you enter all the environment variables and please don't check it into git...
5. **Make sure each third-party service will still work after you delete the old application** Over the course of a web apps life you tend to add a lot of third party services like file uploading, file storage, emails, push notifications, payments etc. You have to make your you replace that service if it ends up getting deleted with the old web app or that it will work with the new web app especially if you change domain names (shits going to get hectic if you do.).
6. **Upload your web app code to new hosting provider** Make sure to also install any dependencies and don't update anything just follow the `.lock` file. If you want to update (probably should keep things updated hey?) do that locally first.
7. **Import the database you exported earlier** You may need to spin up a database server or just import it to where the new web app is being hosted at.
8. **Connect up the database server you just created and the new web app** Normally this just involves adding the database connection details to the environment variables of the web app.
9. **Make your domain name point to your new web app** Usually you just change a CNAME record in your domain name provider. Note I have constantly had issues with changing domain names because it's so hard to debug (it either works or doesn't). Tip: You can run the `host [yourdomainname.com]` to find out if you did it correctly.
10. **Pray to whomever you believe in that your new web app works**

## Why we switched to Heroku from AWS

The main reason was simplicity. Although it is more expensive and you get less value, the extra costs are not that high (just \$2/month more) and we don't need the extra performance any time soon because it can handle quite a lot of traffic like hundreds of concurrent users (can't remember the source, was from reddit posted by some Heroku engineer). I am a big fan of simple interfaces and one-click deployments, of course you lose a lot of flexibility from this but we don't need to serve millions of people and our web app is pretty normal. Finally the most important part, Heroku's docs are far better and easier to follow than AWS'.
