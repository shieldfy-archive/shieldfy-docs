---
title: "Laravel Framework"
date: 2018-04-10T14:01:12+02:00
weight: 31
---

### Publish Config

Go to your console and run `vendor:publish` artisan command
```shell
php artisan vendor:publish --provider="Shieldfy\Extensions\Laravel\ShieldfyServiceProvider" --tag="config"
```
now you will find a new file called `shieldfy.php` in your `config` directory


### Debug level

You can turn debug on/off depend on your needs in the application , the default value is false ( we recommend to leave it false in the production environment )

If debug is false , this will prevent your application to throw errors related to security or bad server response for example.

#### You can modify it on the `.env` (recommended)

```
SHIELDFY_DEBUG=false
```

#### Or you can modify it on the `config/shieldfy.php` directly

```php
/*
 |--------------------------------------------------------------------------
 | Shieldfy debug whether or not expose debug and errors ( True , False )
 |--------------------------------------------------------------------------
 */
'debug' => env('SHIELDFY_DEBUG', false),
```

### Threat Response (Action)

Shieldfy let you control the action the package should take when spotting dangerous activities.

Available Actions: ( Block | Listen ) The default action is block which will block the dangerous activities. The other action listen will record the threat and notify you, but will not block the request and will let the user continue to your application.

#### You can modify it on the `.env` (recommended)

```
SHIELDFY_ACTION=block
```

#### Or you can modify it on the `config/shieldfy.php` directly

```php
/*
 |--------------------------------------------------------------------------
 | Shieldfy default action for detecting threat ( block , listen )
 |--------------------------------------------------------------------------
 */
'action' => env('SHIELDFY_ACTION', 'block'),
```



### Headers Control

For security reasons Shieldfy expose number of headers to enforce some security practices.

The headers exposed by default

- **X-XSS-Protection (Default: 1; mode=block)**
    - For activating browser xss auditor [see more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)
- **X-Content-Type-Options (Default: nosniff)**
    - prevent browser for sniffing the MimeType [see more](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
- **X-Frame-Options (Default: SAMEORIGIN)**
    - Control Website loading inside Iframe

If for some reason you don't want this headers to be exposed or you want to change it's value for it, you can control it. Just pass array for the headers and pass the changed value or false if you want to disable it completely.

#### Example

You want to Deny the website from loading inside any iframes

In `config/shieldfy.php`

```php

'headers' => [
    'X-Frame-Options' => 'Deny'
],
```

#### Example 2

You want to remove `X-Frame-Options` completely

In `config/shieldfy.php`

```php

'headers' => [
    'X-Frame-Options' => false
],
```


### Enable Disable Monitors

Shieldfy Security based on security monitors, each monitors analyze different layer & component.

There is seven Monitors right now

- User Monitor
- Request Monitor
- Database Monitor
- Upload Monitor
- Memory Monitor
- Exception Monitor
- View Monitor

You can disable monitors if you want

#### Example

if you want to disable `View Monitor`

```php

'disable' => [
    'ViewMonitor'
],
```


### Change the default block page

Shieldfy has a default block page , but you can change it to your own whitelabled page easily

First publish views

```shell
php artisan vendor:publish --provider="Shieldfy\Extensions\Laravel\ShieldfyServiceProvider" --tag="view"
```

Then edit this file `resources/views/vendor/shieldfy/block.blade.php` to anything you need

one thing you must to consider is `{incidentId}` text, this has to be in your block page because it will replaced with incidentId a unique identifier to every threat.
