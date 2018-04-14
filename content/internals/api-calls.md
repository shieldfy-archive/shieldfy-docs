---
title: "API Calls"
date: 2018-04-10T14:01:12+02:00
weight: 45
---

## API Calls To Shieldfy Servers

There is a number of API calls goes from the SDK you installed to Shieldfy Servers.

{{% notice note %}}
If for any reason Shieldfy API Servers goes down or have something wrong it will not effect anything on your end.
the call will be automatically skipped and the SDK will continue work without any errors or exceptions.
{{% /notice %}}


###  `/install` Call
At first execution of the SDK the SDK will make initial call to the API
to preform some installation Steps

- Tell our API that the SDK installed on the code
- Download our Security Rules into your SDK

### `/session/start` Call
This call is requested with any new visitor to your website 

The request return with initial score for the visitor , if it a bad visitor or just normal visitor.

{{% notice note %}}
This request is only requested once per user session. and the data stored in the cache
{{% /notice %}}


### `/session/step` Call
This call is requested at the end of page load to tell the api about the current request and current requested page.
{{% notice note %}}
This call is executed after the page returned to the user , so there is no blocking or delaying for the visitor
{{% /notice %}}


### `/session/threat` Call
This call is requested when threat is happened , it will contain all information about 
the request , visitor , session

### `/exception` Call
This is a rare call , it will happen only if there is an internal error happens in the SDK code itself
it will send the api the exception info so we can work on a fix asap.

If you have any further questions about the API's and how it effect the SDK performanc or Privacy .. send us an [email](mailto:team@shieldfy.com)