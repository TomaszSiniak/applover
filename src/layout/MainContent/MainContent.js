import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../components/Pages/Home/Home';
import Login from '../../components/Pages/Login/Login';
import Navbar from '../Navbar/Navbar';

class MainContent extends Component {
  render () {
    return (
      <Fragment>
        <Navbar />
        <Router>
          <Switch>
           <Route exact path='/' component={Login} />
            <Route exact path='/configurator' component={Home} />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}
export default MainContent;