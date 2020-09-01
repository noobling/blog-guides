---
title: How to Export in MongoDB
description: Exporting in MongoDB
updatedAt: December 30, 2018
img: https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60
alt: Export MongoDB
tags:
  - mongodb
  - export
author:
  name: David Yu
  bio: I love to code
  img: /_nuxt/assets/content/davidthrone.jpg
---

`./mongodump --uri <db_uri>`

`./mongorestore --uri <db_uri> <path_to_exported_db>`

This technique doesn't work too well with mongo atlas. Instead mongoDB compass can be used to import and export the data. There you will have to export each collection one by one. and import it one by one.
