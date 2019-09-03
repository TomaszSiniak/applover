import React from 'react';
import CloseIconDark from '../../../../assets/img/closeDark.svg';
import styles from './styles.scss';

const DoortypeModal = props => {
  return (
    <div className={styles.DoorTypeModalWrapper}>
      <div className={styles.DoorTypeModalContent}>
        <div className={styles.DoorTypeModalTitle}>Door Type</div>
        <div className={styles.DoorTypeSelectWrapper}>
          <div className={styles.DoorType}>
            <div className={styles.DoorTypeName}>Single</div>
            <div className={styles.DoorTypeSelect} />
          </div>
          <div className={styles.DoorType}>
            <div className={styles.DoorTypeName}>Double</div>
            <div className={styles.DoorTypeSelect} />
          </div>
        </div>
        <figure className={styles.CloseIconWrapper} onClick={props.toggleModal}>
          <img src={CloseIconDark} />
        </figure>
      </div>
    </div>
  )
}

export default DoortypeModal;