// @flow
Package.describe({
  documentation: 'README.md',
  git: 'git+https://github.com/meteor-activeroute/iron-router.git',
  name: 'activeroute:iron-router',
  summary: 'iron:router adapter for activeroute:core',
  version: '1.0.0-alpha.6',
});

Package.onUse(function onUse(api) {
  api.versionsFrom('1.4.2.2');

  api.use('ecmascript');

  api.use('iron:router@1.0.12');

  api.mainModule('client/activeroute-iron-router.js', 'client', { lazy: true });
  api.mainModule('server/activeroute-iron-router.js', 'server', { lazy: true });
});
