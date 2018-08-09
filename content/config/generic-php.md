---
title: "Generic PHP"
date: 2018-04-10T14:01:12+02:00
weight: 36
---


### Debug level

You can turn debug on/off depend on your needs in the application , the default value is false ( we recommend to leave it false in the production environment )

If debug is false , this will prevent your application to throw errors related to security or bad server response for example.

- Open the file you called shieldfy in and modify the call

```php
$shieldfy = \Shieldfy\Guard::init([
        'app_key'       => '<YOUR_APP_KEY>',
        'app_secret'    => '<YOUR_APP_SECRET>',
        'debug'=>true //default is false
]);
```

### Threat Response (Action)

Shieldfy let you control the action the package should take when spotting dangerous activities.

Available Actions: ( Block | Listen ) The default action is block which will block the dangerous activities. The other action listen will record the threat and notify you, but will not block the request and will let the user continue to your application.

- Open the file you called shieldfy in and modify the call

```php
$shieldfy = \Shieldfy\Guard::init([
        'app_key'       => '<YOUR_APP_KEY>',
        'app_secret'    => '<YOUR_APP_SECRET>',
        'action'=>'listen' //default is block
]);
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

- Open the file you called shieldfy in and modify the call

```php
$shieldfy = \Shieldfy\Guard::init([
        'app_key'       => '<YOUR_APP_KEY>',
        'app_secret'    => '<YOUR_APP_SECRET>',
        'headers' => [
		    'X-Frame-Options' => 'Deny'
		]
]);
```

#### Example 2

You want to remove `X-Frame-Options` completely

- Open the file you called shieldfy in and modify the call

```php
$shieldfy = \Shieldfy\Guard::init([
        'app_key'       => '<YOUR_APP_KEY>',
        'app_secret'    => '<YOUR_APP_SECRET>',
        'headers' => [
		    'X-Frame-Options' => false
		]
]);
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
$shieldfy = \Shieldfy\Guard::init([
        'app_key'       => '<YOUR_APP_KEY>',
        'app_secret'    => '<YOUR_APP_SECRET>',
        'disable' => [
		    'ViewMonitor'
		]
]);
```


### Change the default block page

Shieldfy has a default block page , but you can change it to your own whitelabled page easily
all you want to do is to pass the full path of your html page to the SDK initialization

- Open the file you called shieldfy in and modify the call

```php
$shieldfy = \Shieldfy\Guard::init([
        'app_key'       => '<YOUR_APP_KEY>',
        'app_secret'    => '<YOUR_APP_SECRET>',
        'blockPage' => '/path/to/yourpage'
]);
```

One thing you must to consider is `{incidentId}` text, this has to be in your block page because it will replaced with incidentId a unique identifier to every threat.
