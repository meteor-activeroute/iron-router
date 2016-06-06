import { registerRouter } from 'meteor/activeroute:core';

const adapter = {
  client: true,
  name: 'iron-router',
  server: false,
};

registerRouter(adapter);
