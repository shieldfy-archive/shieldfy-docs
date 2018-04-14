---
title: "Laravel Framework"
date: 2018-04-10T14:01:12+02:00
weight: 11
---

### Package installation

From your console navigate to your application folder and run composer require

For more information about composer click [Composer Basic Usage](https://getcomposer.org/doc/01-basic-usage.md)


```shell
composer require shieldfy/shieldfy-php-client
```

### Add your Key & Secret
Add your api key, api secret in your `.env` file

```
SHIELDFY_APP_KEY=<YOUR_APP_KEY>
SHIELDFY_APP_SECRET=<YOUR_APP_SECRET>
```

### Register Service Provider (Laravel < 5.5)
We leverage service provider auto discovery feature in laravel 5.5 , but if you are using laravel before 5.5 you must add our service provider in `config/app.php` yourself.

```php
'providers' => [
    ...
    \Shieldfy\Extensions\Laravel\ShieldfyServiceProvider::class,
],
```
