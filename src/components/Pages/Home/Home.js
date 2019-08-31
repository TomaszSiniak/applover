import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import OrganizationInfo from '../../Organization/OrganizationInfo/OrganizationInfo';
import { connect } from 'react-redux';

class Home extends Component {
  render () {
    const { loggedIn, organizationInfoVisiblity } = this.props;
    if (loggedIn === false) return <Redirect to='/' />
    console.log(this.props)
    return (
      <div>
        {organizationInfoVisiblity && <OrganizationInfo />}
      </div>
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