import React, { Component } from 'react'
import { loginUser, clearErrorMessage, toggleProgressBar } from '../../../store/actions/login';
import { Redirect } from 'react-router-dom';
import LoginError from './LoginError';
import Portal from '../Portal/Portal';
import ProgressBar from '../../../common/components/ProgressBar/ProgressBar';
import { connect } from 'react-redux';
import styles from './styles.scss';
import { AppContainer } from 'react-hot-loader';

class Login extends Component {

  state = {
    email: null,
    password: null,
    remember: false,
  }

  handleInput = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  loginUser = e => {
    e.preventDefault();

    const { email, password } = this.state;
    if (!email || !password) return;

    this.handleProgressBar();
    // add blur - dodać refy
    const appContainer = document.body.querySelector('.AppContainer--29Dl7');
    appContainer.classList.add('AppContainerBlur--2il6s');
    setTimeout(() => {
      this.props.login(this.state);
      // remove blur dodac refy
      const appContainer = document.body.querySelector('.AppContainer--29Dl7');
      appContainer.classList.remove('AppContainerBlur--2il6s');
    }, 2000);
  }

  handleProgressBar = () => {
    this.props.showLoader();

    setTimeout(() => {
      this.props.showLoader();
    }, 2000);
  }

  handleCloseLoginError = () => {
    const value = false;
    this.props.closeErrorMessage(value)
  }

  handleRememberMe = () => {
    this.setState({
      remember: !this.state.remember,
    })
  }

  render() {
    const { errorMessage, progressBar, loggedIn, token } = this.props;
    if (token) return <Redirect to='/home' />
    return (
      <div className={styles.LoginWrapper}>
        {errorMessage && <LoginError closeError={this.handleCloseLoginError} />}
        <div className={styles.LoginTitle}>Log in</div>
        <form className={styles.LoginForm} onSubmit={this.loginUser}>
          <input className={styles.LoginInput} onChange={this.handleInput} name="email" type="text" placeholder="Email address" />
          <input className={styles.LoginInput} onChange={this.handleInput} name="password" type="password" placeholder="Password" />
          <div className={styles.LoginCheckBoxWrapper}>
            <input id={styles.LoginCheckBox} type="checkbox" onClick={this.handleRememberMe} />
            <label className={styles.LogiCheckBoxLabel} htmlFor={styles.LoginCheckBox}>Keep me logged in</label>
          </div>
          <button className={styles.LoginButton}>Login</button>
        </form>
        {progressBar && (
          <Portal>
            <ProgressBar />
          </Portal>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loginReducer.logged,
    errorMessage: state.loginReducer.isErrorMessageVisible,
    progressBar: state.loginReducer.isProgressBarVisible,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(loginUser(data)),
    closeErrorMessage: value => dispatch(clearErrorMessage(value)),
    showLoader: () => dispatch(toggleProgressBar())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
