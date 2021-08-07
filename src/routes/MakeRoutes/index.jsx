import React from 'react';
import {
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';

const routeTypes = {
  public: ({ renderProps, component: Component }) => {
    const { padding } = renderProps;

    return (
      <div className={padding ? 'px-4 pt-20' : undefined}>
        <Component {...renderProps} />
        {' '}
      </div>
    );
  },
};

const MakeRouteWithSubRoutes = (props) => {
  const {
    path, exact, title, padding,
    component: Component, type,
  } = props;
  window.scrollTo(0, 0);

  return (
    <Route
      path={path}
      exact={exact}
      render={(renderProps) => {
        const propsComponent = {
          ...renderProps,
          padding,
        };
        document.title = title;

        return (
          routeTypes[type]({
            renderProps: propsComponent,
            component: Component,
          })
        );
      }}
    />
  );
};

MakeRouteWithSubRoutes.propTypes = {
  /**
   * The route path
   */
  path: PropTypes.string.isRequired,
  /**
   * Component to be rendered
   */
  component: PropTypes.elementType.isRequired,
  /**
   * If path will be an exact match
   */
  exact: PropTypes.bool,
  /**
   * Path type private, public, persistent
   */
  type: PropTypes.string,
  /**
   * Tab Title
   */
  title: PropTypes.string.isRequired,
  /**
   * If view have to has padding
   */
  padding: PropTypes.bool,
};

MakeRouteWithSubRoutes.defaultProps = {
  exact: false,
  type: 'public',
  padding: true,
};

export default MakeRouteWithSubRoutes;
