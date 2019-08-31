import React from 'react';
import styles from './styles.scss';

const OrganizationButton = props => {
  const buttonAction = () => {
    props.loadOrganizationInfo();
    props.toggleOrgInfo();
  }

  return (
    <div className={styles.OrganizationButtonWrapper}>
      <button className={styles.OrganizationButton} onClick={buttonAction}>My Organization</button>
    </div>
  )
}

export default OrganizationButton;
