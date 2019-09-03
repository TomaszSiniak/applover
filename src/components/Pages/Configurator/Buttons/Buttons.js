import React from 'react';
import styles from './styles.scss'

const Buttons = props => {
  if (props.step === 1) return (
    <div className={styles.ButtonsWrapper}>
      <button className={styles.NextButton} onClick={props.nextStep}>
        NEXT STEP
      </button>
    </div>
  )

  return (
    <div className={styles.ButtonsWrapper}>
      <button className={styles.BackButton} onClick={props.previousStep}>
        BACK
      </button>
      <button className={styles.NextButton} onClick={props.nextStep}>
        NEXT STEP
      </button>
    </div>
  )
}

export default Buttons;