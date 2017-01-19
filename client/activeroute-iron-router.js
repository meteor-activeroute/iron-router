// @flow
import { Router } from 'meteor/iron:router';
import adapter from '../lib/activeroute-iron-router';

const clientAdapter = {
  getCurrentName(controller = Router.current()) {
    let name;

    if (controller) {
      name = controller.route.getName();
    }

    return name;
  },
  getCurrentPath(controller = Router.current()) {
    let path;

    if (controller) {
      path = controller.location.get().path;
    }

    return path;
  },
};

export default { ...adapter, ...clientAdapter };
