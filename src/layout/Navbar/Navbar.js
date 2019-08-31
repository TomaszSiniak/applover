import React, { Component } from 'react';
import Logo from '../../assets/img/logo.png';
import LanguageSelect from '../../components/LanguageSelect/LanguageSelect';
import OrganizationButton from '../../components/Organization/OrganizationButton/Organizationbutton';
import { getOrganizationInfo, toggleOrganizationVisibility } from '../../store/actions/app';
import { connect } from 'react-redux';
import styles from './styles.scss';

const Navbar = props => {
  const { loggedIn, getOrganizationInfo, toggleOrganizationVisibility } = props;
  return (
    <div className={styles.NavbarWrapper}>
      <figure className={styles.LogoWrapper}>
        <img src={Logo} />
      </figure>
      <LanguageSelect />
      {loggedIn && <OrganizationButton loadOrganizationInfo={getOrganizationInfo} toggleOrgInfo={toggleOrganizationVisibility} />}

    </div>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.logged,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrganizationInfo: () => dispatch(getOrganizationInfo()),
    toggleOrganizationVisibility: () => dispatch(toggleOrganizationVisibility())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);