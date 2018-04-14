---
title: "Exception Handling"
date: 2018-04-10T14:01:12+02:00
weight: 44
---


## Exceptions within the SDK

We tried to make the SDK stable as possible but anything can happens it's the basic programming rules.
Because of that we added custom exception handler to the SDK for the errors happens in the SDK code itself

So for example if there is an error occur in the SDK code, the custom handler will catch the exception
and will prevent the exception from stop the application execution.

at the same time it will send an api call `/exception` to our servers notifying us with the exception so we can work on a fix.




