// @flow
import { Router } from 'meteor/iron:router';

const adapter = {
  getPath({ routeName, routeParams = {} }) {
    let path;
    if (Router.routes[routeName]) {
      path = Router.path(routeName, routeParams);
    }
    return path;
  },
  name: 'iron:router',
};


export default adapter;
