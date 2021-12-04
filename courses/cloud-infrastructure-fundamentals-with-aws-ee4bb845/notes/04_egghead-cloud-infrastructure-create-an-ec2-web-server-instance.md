# Cloud Infrastructure create an ec2 web server instance

[Video link](https://www.egghead.io/lessons/egghead-cloud-infrastructure-create-an-ec2-web-server-instance?pl=cloud-infrastructure-fundamentals-with-aws-ee4bb845)

how to create an ec2 instance

You can favorite services

<TimeStamp start="0:20" end="0:25">
  
  Favorite a service by hovering over its name and clicking the star
  
</TimeStamp>

<TimeStamp start="2:05" end="2:15">
  
  Make sure to use the free tier option if you don't want to be charged
  
</TimeStamp>

<TimeStamp start="6:07" end="6:15">
  
  `0.0.0.0/0` is the ipv4 syntax for all. `::/0` is the ipv6 syntax for all
  
</TimeStamp>

instances are specific to their region. Make sure to double check other regions if you suspect an instance is running and you don't see it

Launch instances

AMI (amazon machine image) templates for the software, like the operating systems 

A common one used is Ubuntu, 

You can select the power of your instance



You get config options like network, tags, storage, etc. 

Tags make your stuff a lot easier to find

Security group is a set of firewall rules. You can create rules for incoming requests. 

We ensured that ssh requests come from only our own IP address



no ip restrictions for http and https requests

set a key pair for sshing. Not recommended to not use a key pair.

You can rename your instance after making it