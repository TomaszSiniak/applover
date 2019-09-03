import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import OrganizationInfo from '../../Organization/OrganizationInfo/OrganizationInfo';
import Configurator from '../Configurator/Configurator';
import { connect } from 'react-redux';

class Home extends Component {
  render () {
    const { loggedIn, organizationInfoVisiblity } = this.props;
    if (loggedIn === false) return <Redirect to='/' />
    return (
      <Fragment>
        <Configurator />
        {organizationInfoVisiblity && <OrganizationInfo />}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.logged,
    organizationInfoVisiblity: state.app.organizationInfoVisiblity,

  }
}

export default connect(mapStateToProps)(Home);