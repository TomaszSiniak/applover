import React from 'react';
import CloseIcon from '../../../assets/img/close.svg';
import styles from './styles.scss';

const LoginError = props => {
  return (
    <div className={styles.LoginErrorWrapper}>
      <div className={styles.LoginErrorInfo}>Invalid email or password</div>
      <figure className={styles.CloseIconWrapper} onClick={props.closeError}>
        <img src={CloseIcon}/>
      </figure>
    </div>
  )
}

export default LoginError;