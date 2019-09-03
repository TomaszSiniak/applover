import React, { Component } from 'react';
import styles from './progress.scss';

class Progress extends Component {
  render () {
    return (
      <div className={styles.ProgressContainer}>
        <ul className={styles.ProgressWrapper}>
          <li className={styles.ProgressItem}>
            <span className={this.props.step === 1 ? styles.GreatCircleActive : styles.GreatCircle }>
              <span className={this.props.step === 1 ? styles.SmallCircleActive : styles.SmallCircle} />
            </span>
            <span className={styles.ProgressInfo}>STEP 1</span>
            <span className={styles.ProgressInfo}>CHOOSE DOOR</span>
          </li>
          <li className={styles.ProgressItem}>
          <span className={this.props.step === 2 ? styles.GreatCircleActive : styles.GreatCircle }>
          <span className={this.props.step === 2 ? styles.SmallCircleActive : styles.SmallCircle} />
        </span>
            <span className={styles.ProgressInfo}>STEP 2</span>
            <span className={styles.ProgressInfo}>CHOOSE DOOR DIVISION</span>
          </li>
          <li className={styles.ProgressItem}>
          <span className={this.props.step === 3 ? styles.GreatCircleActive : styles.GreatCircle }>
          <span className={this.props.step === 3 ? styles.SmallCircleActive : styles.SmallCircle} />
        </span>
            <span className={styles.ProgressInfo}>STEP 3</span>
            <span className={styles.ProgressInfo}>CHOOSE COLOR</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default Progress;