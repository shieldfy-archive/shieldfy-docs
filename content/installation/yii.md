---
title: "Yii Framework"
date: 2018-04-10T14:01:12+02:00
weight: 15
---

## Require shieldfy package
From your console navigate to your application folder and enter the command below:
```
composer require shieldfy/shieldfy-yii-extension
```
for more information about composer click [here](https://getcomposer.org/doc/01-basic-usage.md)

## Yii Basic
### Add Shieldfy DB listener
Add shieldfy attachPDO to this file `config/db.php`
```
return [
    .....

    'on afterOpen' => function($event) {
            (\Yii::$container->get('shieldfy'))?\Yii::$container->get('shieldfy')->attachPDO($event->sender->pdo):null;
    }
]
```

### Add Shieldfy Key & Secret
Add shieldfy key, secret to this file `config/params.php`
```
return [
    .....             
    'Shieldfy' => [
        'appKey' => '<APP_KEY>',
        'appSecret' => '<APP_SECRET>',
    ]
]

```

## Yii Advanced
### Add Shieldfy DB listener
Add shieldfy attachPDO to this file `common/config/main-local.php`
```
return [
    'components' => [
        'db' => [
            ...
            'on afterOpen' => function($event) {
                (\Yii::$container->get('shieldfy'))?\Yii::$container->get('shieldfy')->attachPDO($event->sender->pdo):null;
        	},
        ],
        'mailer' => [
        .....
    ],
];

```

### Add Shieldfy Key & Secret
Add shieldfy key, secret to this file `common/config/params.php`
```
return [
    .....             
    'Shieldfy' => [
        'appKey' => '<APP_KEY>',
        'appSecret' => '<APP_SECRET>',
    ]
]

```