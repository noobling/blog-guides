---
title: How to Delete Documents with Mongoose
description: Deleting documents with mongoose
updatedAt: December 30, 2018
img: https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60
alt: Mongoose
tags:
  - mongoose
  - delete-documents
author:
  name: David Yu
  bio: I love to code
  img: /_nuxt/assets/content/davidthrone.jpg
---

You have to add a callback to the statement e.g.
`User.deleteOne({_id: req.params.userId}, err => console.log(err));`

You can't do something like this
`User.deleteOne({_id: req.params.userId})`

If that doesn't work try this longer way

```js
TodoList.findOne({ _id: req.params.todoListId }).then((result) => {
  result.participants.push(req.user.id)
  result.save()
  res.json('worked')
})
```
