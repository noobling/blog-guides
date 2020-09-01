---
title: How to Import MySQL Data Remotely
description: Importing MySQL data remotely
updatedAt: December 30, 2018
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: sql remotely
tags:
  - mysql
  - import-data
author:
  name: David Yu
  bio: I love to code
  img: require/_nuxt/assets/content/davidthrone.jpg
---

Your database contains the most valuable part of your application, its data. All other parts of your applications Frontend, backend, API, server, load balancer etc can easily be recreated but the data in your application is unique. It cannot be easily reproduced and the information contained in the data has a potential infinite economic worth.

Something I find very useful is importing data into your database because you want to say move to a different hosting provider or create another environment similar to production.

This can easily be done with mysql command line. Download here: https://dev.mysql.com/downloads/mysql/

Then simply import the data
`mysql --host=$host --user=$user --password= --database=$databasename < my_dump_file.sql`
`> Enter your password`
