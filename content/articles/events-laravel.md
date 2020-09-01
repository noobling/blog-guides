---
title: Understanding Events in Laravel
description: Explaination on events in Laravel
updatedAt: December 30, 2018
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q-60
alt: Laravel events
tags:
  - laravel
  - events
  - explaination
author:
  name: David Yu
  bio: I love to code
  img: /_nuxt/assets/content/davidthrone.jpg
---

I have grown to like the Laravel framework very much even though I am not a fan of php. The reason why I like it so much is because it takes care of a lot of things that you would normally have to try implement yourself or use an unofficial library such as authentication, form validation, sending emails, pusher notifications, caching, oauth. It is insane how easy Laravel makes implementing these things where as in other frameworks it would take so much pouring through of documentation just to make things work. Lastly their test suit--phpunit--is probably the best test suite i have ever used.

The basic idea of events is that you want to broadcast to your entire application that something has occurred. At that point in your code you don't care what the rest of the application does with this event all you want is to say that the event has occurred. There will be listeners that listen for this event their job is to perform some action because this event has occurred. Lets run through an example to clear up this concept.

Say you have a function `addReply`

```jsx
/**
    * Add a reply to a thread
    *
    * @param array $reply
    * @return Model
    */
   public function addReply($reply)
   {
       return $this->replies()->create($reply);
   }
```

Its main job is to just add a reply to the database. But what happens if you want to do something more say send an email when a reply is added or if you want to update the replies count? Sure you could add it to the code below

```php
 public function addReply($reply)
    {
        return $this->replies()->create($reply);

        Mail::to(auth()->user()->email)->send(new AddReplyEmail);

        auth()->user()->thread->updateRepliesCount($reply);
    }
```

But this quickly gets messy doesn't it. The addReply function could quickly end up doing much more than just adding a reply.

Introducing `events`

```php
public function addReply($reply)
    {
        $reply = $this->replies()->create($reply);

        event(new ThreadHasNewReply($this, $reply));

        return $reply;
    }
```

And in `App\Providers\EventServiceProvider` add this to the `listen` array

```php
'App\Events\ThreadHasNewReply' => [
            'App\Listeners\NotifyThreadSubscribers',
            'App\Listeners\UpdateThreadRepliesCount'
        ]
```

Then generate the files with `php artisan event:generate`

Add your required code to the generated files and you are done. Its that simple in Laravel to add events.
