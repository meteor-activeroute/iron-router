// @flow
Package.describe({
  documentation: 'README.md',
  git: 'https://github.com/meteor-activeroute/iron-router.git',
  name: 'activeroute:iron-router',
  summary: 'Iron-Router adapter for active-route.',
  version: '0.1.0',
});

Package.onUse(function onUse(api) {
  api.versionsFrom('1.4.2.2');

  api.use('ecmascript');

  api.use([
    'activeroute:core@0.1.0',
    'iron:router@1.0.12',
  ]);

  api.mainModule('client/activeroute-iron-router.js', 'client', { lazy: true });
  api.mainModule('server/activeroute-iron-router.js', 'server', { lazy: true });
});
