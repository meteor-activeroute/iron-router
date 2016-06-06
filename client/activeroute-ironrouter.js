import { registerRouter } from 'meteor/activeroute:core';

const adapter = {
  client: true,
  name: 'flow-router',
  path() {
    const controller = Router.current();
    let path = '';

    if (controller) {
      path = controller.location.get().path;
    }

    return path;
  },
  pathFor(routeName, ...args) {
    if (Router.routes[routeName]) {
      return Router.path(routeName, ...args);
    } else {
      return '';
    }
  },
  server: false,
};

registerRouter(adapter);
