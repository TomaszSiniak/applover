import React, { Component } from 'react'
import { loginUser, toggleErrorMessage } from '../../../store/actions/login';
import LoginError from './LoginError';
import { connect } from 'react-redux';
import styles from './styles.scss';

class Login extends Component {


  state = {
    email: null,
    password: null,
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

    this.props.login(this.state);
  }

  render () {
    const { errorMessage, closeErrorMessage } = this.props;
    return (
      <div className={styles.LoginWrapper}>
        {errorMessage && <LoginError closeError={closeErrorMessage}/> }
        <div className={styles.LoginTitle}>Log in</div>
        <form className={styles.LoginForm} onSubmit={this.loginUser}>
          <input className={styles.LoginInput} onChange={this.handleInput} name="email" type="text" placeholder="Email address" />
          <input className={styles.LoginInput} onChange={this.handleInput} name="password" type="password" placeholder="Password" />
          <div className={styles.LoginCheckBoxWrapper}>
            <input id={styles.LoginCheckBox}  type="checkbox" />
            <label className={styles.LogiCheckBoxLabel} htmlFor={styles.LoginCheckBox}>Keep me logged in</label>
          </div>
          <button className={styles.LoginButton}>Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.loginReducer.isErrorMessageVisible,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(loginUser(data)),
    closeErrorMessage: () => dispatch(toggleErrorMessage())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
