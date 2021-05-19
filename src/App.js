import { Component, Suspense } from "react";
import React, { Coomponent } from 'react'
import Navigation from './component/Navigation/Navigation'
import Footer from './component/Footer/Footer'
import routes from './routes';
import ScrollToTop from './component/ScrollToTop/ScrollToTop'
import Loading from './component/Loading/Loading' 

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
class App extends Component {
  render() {

    const RouteWithSubRoutes = (route) => {
      return (
        <Route
          path={route.path}
          render={props => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      )

    }
    return (
      <>
        {/* <Router> */}
     
          <ScrollToTop />
          <Navigation />
          <Suspense fallback={<Loading/>}>
          {/* <Suspense> */}
            <Switch>
            
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
              <Redirect from="/" to="/beranda" />
            
            </Switch>

          </Suspense>
          <Footer />
        {/* </Router> */}
      </>
    );
  }
}


export default App;
