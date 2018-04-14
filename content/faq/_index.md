---
title: "FAQ"
date: 2018-04-10T14:01:12+02:00
weight: 50
---

### Does shieldfy affect my website performance ?
We done a lot of performance optimization and tuning .. and all the analysis done on your server.
Overall in the SDK takes less than 40 MilliSeconds (0.04 seconds) to process.

### What happens if Shieldfy servers goes down ?
Nothing .. Yes , we develop the SDK to run smoothly even if our servers is down.
No errors or exceptions will raised and when the servers back up , it will resume the connection.

### What Shieldfy mainly protect me against ?
All of the basic attacks ( XSS , SQLI , CSRF .. etc) and also the advanced attacks ( Object Injection , RCE's .. etc)
We continue adding more techniques to keepup with the techniques discovered on the security world.

### Do shieldfy access my code ? What about privacy ?
The short answer we don't read all of your source code.
The long answer is Shieldfy analyze the code in the run-time , it means function & classes called on the run-time.
It will only read the source code if the attack and stack trace pointed to a file that responsible for the attack. 
Then shieldfy will read this file source code to identify the vulnerability.

### Is Shieldfy for PHP projects only ?
For now yes , We cover PHP language at first . But We have NodeJS & Ruby SDK's on progress will be released soon.

### I am using Framework and Frameworks is secure by default , Should i use Shieldfy ?
This is a popular misconception. Because even frameworks done a good work securing the core from basic attacks , they had to make it generic security to make it suits every web application possible.
And today web applications became more complex than ever and more developers became envolved with the same web application make the web application better but in the same time full of bugs and security issues.


### Who behind Shieldfy project ?
Shieldfy Inc. is registered in Delaware,United states , and the development team is in Alexandria ,Egypt. So we are operating according to United States & Egyptian law.