---
title: "CodeIgniter Framework"
date: 2018-04-10T14:01:12+02:00
weight: 12
---

### Package installation

From your console navigate to your application folder and run composer require

For more information about composer click [Composer Basic Usage](https://getcomposer.org/doc/01-basic-usage.md)


```shell
composer require shieldfy/shieldfy-php-client
```

### Enable Shieldfy Hook

Enable hooks in the config `application/config/config.php`

```php
$config['enable_hooks'] = TRUE;
```

Add the following lines at the end of `application/config/hooks.php` file

```php
if(!class_exists(\Composer\Autoload\ClassLoader::class)) require_once(FCPATH.'/vendor/autoload.php');

$shieldfy = \Shieldfy\Guard::init([
        'app_key'       => '<YOUR_APP_KEY>',
        'app_secret'    => '<YOUR_APP_SECRET>'
]);

$hook['post_controller_constructor'] = \Shieldfy\Extensions\CodeIgniter\Bridge::hook($shieldfy,isset($hook) ? $hook : null);
```
