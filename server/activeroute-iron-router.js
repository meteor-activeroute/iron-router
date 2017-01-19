// @flow
import adapter from '../lib/activeroute-iron-router';

const serverAdapter = {
  getCurrentName(controller) {
    if (!controller) {
      throw new Error('getCurrentName needs the current RouteController as an argument when used on the server.');
    }

    return controller.route.getName();
  },
  getCurrentPath(controller) {
    if (!controller) {
      throw new Error('getCurrentPath needs the current RouteController as an argument when used on the server.');
    }

    return controller.request.url;
  },
};

export default { ...adapter, ...serverAdapter };
