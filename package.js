// @flow
Package.describe({
  documentation: 'README.md',
  git: 'https://github.com/meteor-activeroute/iron-router.git',
  name: 'activeroute:iron-router',
  summary: 'Iron-Router adapter for active-route.',
  version: '0.1.0',
});

Package.onUse(function onUse(api) {
  api.versionsFrom('1.3.2.4');

  api.use('ecmascript');

  api.use([
    'activeroute:core@0.0.1',
    'iron:router@1.0.12',
  ]);

  api.mainModule('client/activeroute-ironrouter.js', 'client');
  api.mainModule('server/activeroute-ironrouter.js', 'server');
});
