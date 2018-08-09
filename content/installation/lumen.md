---
title: "Lumen Framework"
date: 2018-04-10T14:01:12+02:00
weight: 12
---

## Package installation

From your console navigate to your application folder and enter the command below:
```
composer require shieldfy/shieldfy-php-client
```
for more information about composer click [here](https://getcomposer.org/doc/01-basic-usage.md)

## Add Shieldfy Key & Secret
Add your key and secret to `.env` file
```
SHIELDFY_APP_KEY=<APP_KEY>
SHIELDFY_APP_SECRET=<APP_SECRET>
```
## Add Shieldfy Service provider


In `bootstrap/app.php` add `ShieldfyServiceProvider`

```
$app->register( \Shieldfy\Extensions\Lumen\ShieldfyServiceProvider::class);
```