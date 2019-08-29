import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { loggedIn } = this.props;
    if(loggedIn === false) return  <Redirect to='/' />
    return (
      <div>
        Home
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    loggedIn: state.loginReducer.logged,
    // errorMessage: state.loginReducer.isErrorMessageVisible,
    // progressBar: state.loginReducer.isProgressBarVisible,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     login: data => dispatch(loginUser(data)),
//     closeErrorMessage: value => dispatch(clearErrorMessage(value)),
//     showLoader: () => dispatch(toggleProgressBar())

//   }
// }

export default connect(mapStateToProps)(Home);