import React, { Component } from 'react';
import styles from './styles.scss'
import { connect } from 'react-redux';

class OrganizationInfo extends Component {
  render () {
    if (!this.props.data) {
      return <div className={styles.OrganizationInfoWrapper}>Loading...</div>
    }

    const { name, address_line_1, address_line_2, city, email, phone_number, postal_code } = this.props.data;
    return (
      <div className={styles.OrganizationInfoWrapper}>
        <div className={styles.OrganizationRow}>organization</div>
        <div className={styles.OrganizationRow}>name: {name}</div>
        <div className={styles.OrganizationRow}>email: {email}</div>
        <div className={styles.OrganizationRow}>phone_number: {phone_number}</div>
        <div className={styles.OrganizationRow}>address_line_1: {address_line_1}</div>
        <div className={styles.OrganizationRow}>address_line_2 {address_line_2}</div>
        <div className={styles.OrganizationRow}>city: {city}</div>
        <div className={styles.OrganizationRow}>postal_code: {postal_code}</div>
        <div className={styles.OrganizationRow}>Tak, takie pola byly w designie :)</div>
        <div className={styles.Triangle} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.app.organization
  }
}

export default connect(mapStateToProps)(OrganizationInfo);