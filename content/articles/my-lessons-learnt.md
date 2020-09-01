---
title: Lessons Learnt & Looking at the future and past of CFC
description: Looking at what I have learnt while at CFC
updatedAt: January 29, 2019
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: Lessons Learnt
tags:
  - cfc
  - lessons-learnt
author:
  name: David Yu
  bio: I love to code
  img: require/_nuxt/assets/content/davidthrone.jpg
---

## Lessons Learnt

I thought I would share some of the wisdom that I have gained in the trenches.

1. **Writing good software is hard.** Most websites are actually just hanging on by a thread and require a team of developers to stop it from imploding.
2. **No matter how well you thought you coded your app it will always have bugs.**
3. **Use https://sentry.io to catch bugs in production** (that's the live software that has users). It provides the exact line of code where the program failed at!
4. **It is very easy for bugs to occur when switching from local/development to production** especially if you are an inexperienced dev. Easy to fix and common bugs include ones relating to different URLs, HTTPS and HTTP, the difference in databases e.g. Postgres and SQLite. This issue can be mostly resolved by using just a frontend app or utilise BaaS like Auth0 and Graphcool.
5. When we copy code or use code someone else wrote we think we know what is going on but really we don't. It takes a long to be a competent programmer so be patient. <nuxt-image file="confidence-vs-competence.jpg" alt="Confidence vs competence graph" />
6. **Difference between uni programming and work programming is large** I know this is a point that is quite often emphasised but for me, it is not because you learn different things or what you learn in uni is impractical. It is more to do with boredom. At work, you have to program for 7 hours a day most likely on the same project 5 days a week. In a week you probably do more programming than you do in a semester at uni.
7. **Use Nuxt + Vuetify + Graphcool + Now for hackathons** I actually haven't tried this stack out before but I am pretty sure you could build fully featured apps really quickly with 0 bugs perfect for a hackathon.
8. **Future is frontend frameworks + minimal backend** By future I mean next 2-3 years because web technology is changing at an incredibly fast pace. A lot of business logic and software complexity has shifted from the backend to the frontend for example sorting data. This has meant that we use api servers rather than fully featured backend frameworks that have their own templating language for the frontend. However I think those heavy backend frameworks always have a place, they allow us to quickly produce production web apps. But if we wanted to build flexible, scalable long term projects frontend framework + api/graphql server is the way to go.

# David's look back on the past and future of CFC

## Retrospective

It has been an amazing ride the past two and a half years with Coders for Causes I got to experience a lot of things that I could never of. Some highlights include:

- The Flow Perth 5 [hackathon](https://codersforcauses.org/hackathons), this was the first time I heard about frontend frameworks like Angular and React. The food was incredible and all the devs were talented professionals. It felt like I was way out of my league.
- Building the [Home for Now for Anglicare](https://www.homefornow.org.au/). The complexity of this project wasn't too high but it was a fully featured web project so it required a lot of different parts to it. This was the first time I actually got to work with a full team of programmers so it was a great learning experience.
- Signing the club up to be a business/charity. I got to learn a lot about the process you have to go through to become and business and the requirements of becoming a charity.
- Building a Coders for Causes public facing website. This was another great learning experience in regards to the issues that could occur when your website is very public. Some include people doing unusual things that would break your code. Spammers and hackers trying to destroy your site and browser support is a massive pain.

## Challenges

There is only one real challenge for me and it wasn't to do with the software (except for that Flow Perth 5 hackathon) or the dev ops side (was a real pain though). It was to do with people, **engagement**. I think this isn't something specific to our club it is a common issue for most student clubs. It is very hard to get new people in and for them to stay engaged in the club. The only real way for an outsider to stay is for them to develop friendships within the club. However the engagement issue extended beyond members onto clients and committee. It is very hard to write any meaningful software when the client is unresponsive. In saying so this wasn't always the case some clients, members and committee put a lot of effort into the club to get it to where it is today.

## Future of CFC

There are a good 2 years of runway left for the club but beyond that it is really dependent on whether we can find a group of talented, self-motivated and outgoing student developers. It could also possibly move away from being a student club into a more formally formed charity for indefinite survival. One interesting vision I have for CFC is that we become an exclusive club only for the very best student developers around Australia. We stringently filter Charity projects for the best and most exciting ones. There will be cool perks for being part of CFC like free meals, travel around Australia and guaranteed jobs at the very best tech firms in Australia e.g. Google, AWS, Atlassian, Canva but we will see where I put my focus on work or CFC ;).
