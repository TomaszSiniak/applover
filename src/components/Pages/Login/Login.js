import React, { Component } from 'react'
import styles from './styles.scss';

class Login extends Component {
  render () {
    return (
      <div className={styles.LoginWrapper}>
        <div className={styles.LoginTitle}>Log in</div>
        <form className={styles.LoginForm}>
          <input className={styles.LoginInput} type="text" placeholder="Email address"/>
          <input className={styles.LoginInput} type="password" placeholder="Password" />
          <div className={styles.LoginCheckBoxWrapper}>
            <input className={styles.LoginCheckBox} type="checkbox" />
            <div className={styles.LogiCheckBoxDesc}>Keep me logged in</div>
          </div>
          <button className={styles.LoginButton}>Login</button>
        </form>
      </div>
    )
  }
}

export default Login;
