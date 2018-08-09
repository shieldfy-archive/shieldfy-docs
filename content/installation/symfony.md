---
title: "Symfony Framework"
date: 2018-04-10T14:01:12+02:00
weight: 13
---

## Require shieldfy package
From your console navigate to your application folder and enter the command below:
```
composer require shieldfy/shieldfy-php-client
```
for more information about composer click [here](https://getcomposer.org/doc/01-basic-usage.md)

## Add symfony bundle
Add shieldfy bundle to `config/bundles.php` file
```
Shieldfy\Extensions\Symfony\ShieldfyBundle::class => ['all' => true],
```

## Add shieldfy event subscriber
Add shieldfy subscriber to `config/services.yaml` file
```
Shieldfy\Extensions\Symfony\EventSubscriber\ShieldfySubscriber:
        tags:
            - { name: kernel.event_listener, event: kernel.controller }

```

## Add shieldfy protection to your controllers
all of your controllers must implement this Interface `Shieldfy\Extensions\Symfony\ShieldfySymfonyControllerInterface`
```
namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Shieldfy\Extensions\Symfony\ShieldfySymfonyControllerInterface;

class UsersController extends Controller implements ShieldfySymfonyControllerInterface 
{
```

## Add Shieldfy Key & Secret
Add your key and secret to `.env` file
```
SHIELDFY_APP_KEY=<APP_KEY>
SHIELDFY_APP_SECRET=<APP_SECRET>
```