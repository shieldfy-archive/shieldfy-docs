---
title: "Logs & Caching"
date: 2018-04-10T14:01:12+02:00
weight: 43
---

## Logs & Caching

### Logs

The SDk holds some logs , it stored here `vendor/shieldfy/shieldfy-php-client/logs`

The logs holds information only about exceptions that occurs in the SDK itself.

{{% notice note %}}
The logs don't store any information related to website visitor or anyother private information.
{{% /notice %}}


### Caching

The SDK use caching to cache the information about current visitor and the steps they are doing 
on the website.

The Caching stored on your default session storage. We are working on adding some other caching handlers but for now its only the server session storage.

