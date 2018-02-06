import React from 'react';
import { ReactRouter } from 'react-router-dom';
import Router from 'react-router-dom/Router';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import Rating from '../containers/Rating';
import Navigation from '../components/Navigation';
import NewLanguageView from '../containers/NewLanguageView';
import LoginView from "../containers/LoginView";

import {history} from '../lib/history';

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className='container'>
          <Navigation />
          <Switch>
            <Route exact path='/github-rating' component={Rating} />
            <Route exact path='/github-rating/new' component={NewLanguageView} />
            <Route exact path='/github-rating/login' component={LoginView} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = Routes;