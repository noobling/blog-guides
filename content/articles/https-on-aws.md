---
title: Setting up HTTPS on AWS
description: How to setup HTTPS on AWS
updatedAt: December 30, 2018
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: HTTPS AWS
tags:
  - https
  - aws
author:
  name: David Yu
  bio: I love to code
  img: require(~/assets/content/davidthrone.jpg)
---

Most websites use the https protocol to serve all their traffic. This is to ensure that the data is encrypted so no unintended party can read any of the data that is being sent. This is important for privacy reasons as you wouldn't want anyone to be able to see what you are browsing on the internet and also security. You wouldn't want other people finding out your email and passwords. Amazon offers a free and easy to use service Amazon Certificate Manager: https://aws.amazon.com/certificate-manager/ Of course they have their own documentation to set this up https://docs.aws.amazon.com/acm/latest/userguide/gs.html however I find that their docs are rather lengthy and not really optimal for beginners. Their setups are also deliberately simple and so don't really cover real world difficulties well. It would be nice to have some sort of discussion at the end of each doc sort of like what digital ocean provides https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-16-04 to help with this.

Anyway without further ado here is how to set it up

1. Go to Amazon Certificate Manager in your aws console
2. Request a certificate and enter the domain names you wish to serve over https for example if i wanted to add https to this site I would add `forum.codersforcauses.org` for a more general case you could add `*.codersforcauses.org` for all sub domains. Note `codersforcauses.org` domain won't have https available in that case you still need to add that as a domain name so a more comprehensive scenario would be `codersforcauses.org` and `*.codersforcauses.org`
3. Verify that you own that domain name for Amazon. The recommended way is through adding a CNAME record using your dns provider in our case it is namecheap so we would use namecheap's dns panel to add this CNAME record. You will be able to see if your record is verified or not on ACM's dashboard. Hint: the `name` field is called `hostname` for some dns providers. You can remove those records once you have been verified.
4. Now add your newly created ACM certificate to your load balancer. Unfortunately as of writing this post Amazon only supports this feature through a load balancer or cloud front. So your aws server must be behind a load balancer. You can access your load balancers through the ec2 dashboard under the load balancing section. Click on the load balancer that is targeting your server. Then go to the `listeners` tab. You should see http protocol already setup. Now we want to add the https protocol so click edit and choose https. Under ssl certificate click change and select the on you just created through ACM. Save this then you can close the modal. Hint: Make sure you don't remove the existing http listener otherwise when someone enters yoursite.com directly in the url it wont work (e.g. using http protocol)
5. Check that https is being allowed for your load balancer. To do this go the your load balancer's security group and click on the inbound tag. Check if https traffic is being allowed if not add a new rule to allow this.
6. You are all set now to see if it worked visit your domain name over https e.g. https://codersforcauses.org

## Troubleshooting

- There is a blank screen but the https padlock is visible: open developer console and check if there are any error messages. If it shows errors due to requesting resources from insecure domain e.g. http:// domain then you will need to request resources over https
- It routes back to http: Most likely you did not set it up correctly check that the domain name points to your load balancer's dns. Also check if https is being allowed for your load balancer.

Cheers,
David
