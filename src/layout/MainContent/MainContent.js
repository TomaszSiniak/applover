import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../../components/Pages/Home/Home';
import Login from '../../components/Pages/Login/Login';
import Navbar from '../Navbar/Navbar';

class MainContent extends Component {
  render () {
    return (
      <div>
        <Navbar />
        <Router>
          <Switch>
           <Route exact path='/' component={Login} /> 
            <Route path='/home' component={Home} />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default MainContent;