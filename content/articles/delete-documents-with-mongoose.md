---
title: How to Delete Documents with Mongoose
description: Deleting documents with mongoose
updatedAt: December 30, 2018
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: Mongoose
tags:
  - mongoose
  - delete-documents
author:
  name: David Yu
  bio: I love to code
  img: require(~/assets/content/davidthrone.jpg)
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
