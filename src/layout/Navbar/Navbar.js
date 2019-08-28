import React, { Component } from 'react';
import Logo from '../../assets/img/logo.png';
import LanguageSelect from '../../common/components/LanguageSelect/LanguageSelect';
import styles from './styles.scss';

class Navbar extends Component {
  render() {
    return (
      <div className={styles.NavbarWrapper}>
        <figure className={styles.LogoWrapper}>
          <img src={Logo}/>
        </figure>
        <LanguageSelect />
      </div>
    )
  }
}

export default Navbar;