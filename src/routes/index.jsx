import React from 'react';
import { Switch } from 'react-router-dom';
import routes from './routesList';
import MakeRouteWithSubRoutes from './MakeRoutes';

const Routes = (props) => (
  <Switch>
    {
      routes.map(
        (route) => (
          <MakeRouteWithSubRoutes
            key={route.path}
            {...props}
            {...route}
          />
        ),
      )
    }
  </Switch>
);

export default Routes;
