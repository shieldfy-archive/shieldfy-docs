---
title: "Generic PHP"
date: 2018-04-10T14:01:12+02:00
weight: 16
---

### Package installation

From your console navigate to your application folder and run composer require

For more information about composer click [Composer Basic Usage](https://getcomposer.org/doc/01-basic-usage.md)


```shell
composer require shieldfy/shieldfy-php-client
```

### Load shieldfy

Add this line to your script front usually `index.php`

```php
<?php
if(!class_exists(\Composer\Autoload\ClassLoader::class)) require_once(__DIR__.'/vendor/autoload.php');

$shieldfy = \Shieldfy\Guard::init([
    'app_key'       => '<YOUR_APP_KEY>',
    'app_secret'    => '<YOUR_APP_SECRET>'
]);
```

Attach your Database Object `PDO` to shieldfy for analysis

```php
//$pdo is the variable that holds your PDO connection
$shieldfy->attachPDO($pdo);
```
