import React from 'react';
import RouteHandler from './components/RouteHandler';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads';
import NotFound from './pages/NotFound';
import { Switch, Route } from 'react-router-dom';

export default () => {
  return(
      <Switch>
        <RouteHandler exact path="/" >
          <Home />
        </RouteHandler> 
        <RouteHandler exact path="/about"> 
          <About />
        </RouteHandler>
        <RouteHandler exact path="/signin"> 
          <SignIn />
        </RouteHandler>
        <RouteHandler exact path="/signup"> 
          <SignUp />
        </RouteHandler>
        <RouteHandler exact path="/ad/:id"> 
          <AdPage />
        </RouteHandler>
        <RouteHandler exact path="/post-an-ad"> 
          <AddAd />
        </RouteHandler>
        <RouteHandler exact path="/ads"> 
          <Ads />
        </RouteHandler>
        <RouteHandler exact path="*"> 
          <NotFound />
        </RouteHandler> 
      </Switch>
  );
}      