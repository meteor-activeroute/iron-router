# activeroute:iron-router

This is the iron:router adapter for activeroute:core.

## Install

```sh
meteor add activeroute:iron-router
```

## Usage

This package is useless on it's own, it's a router adapter for
[activeroute:core].

```js
import ActiveRoute from 'meteor/activeroute:core';
import adapter from 'meteor/activeroute:iron-router';

const activeRoute = new ActiveRoute({
  routerAdapter: adapter,
});

activeRoute.name('home');
// return true/false
```

[activeroute:core]: https://github.com/meteor-activeroute/core
