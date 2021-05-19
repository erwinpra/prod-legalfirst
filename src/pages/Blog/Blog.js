import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
export default class Article extends Component {
  render() {
    const RouteWithSubRoutes = (route) => {
      return (
        <Route
          path={route.path}
          render={props => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      );
    }
    return (

      <div>
        <Switch>
          {this.props.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          <Redirect to="/artikel/grid" />
        </Switch>
      </div>
    )
  }
}
