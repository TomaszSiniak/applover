import React, { Component } from 'react';
import styles from './styles.scss';

class Door extends Component {
  render() {
    return (
      <div>
        <div className={styles.DoorWrapper}>
          <div className={styles.DoorRow}>
            <div className={styles.DoorBox} />
            <div className={styles.DoorBox} />
            <div className={styles.DoorBox} />
          </div>
          <div className={styles.DoorRow}>
            <div className={styles.DoorBox} />
            <div className={styles.DoorBox} />
            <div className={styles.DoorBox} />
          </div>
          <div className={styles.DoorRow}>
            <div className={styles.DoorBox} />
            <div className={styles.DoorBox} />
            <div className={styles.DoorBox} />
          </div>
          <div className={styles.DoorRow}>
            <div className={styles.DoorBox} />
            <div className={styles.DoorBox} />
            <div className={styles.DoorBox} />
          </div>
          <div className={styles.DoorRow}>
            <div className={styles.DoorBox} />
            <div className={styles.DoorBox} />
            <div className={styles.DoorBox} />
          </div>
        </div>
      </div>
    )
  }
}

export default Door;