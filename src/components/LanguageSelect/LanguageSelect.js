import React, { Component } from 'react'
import styles from './styles.scss';

class LanguageSelect extends Component {
  render() {
    return (
      <div className={styles.SelectLanguageWrapper}>
        <div className={styles.SelectLanguageTitle}>Select language:</div>
        <select className={styles.SelectLanguage}>
          <option>English</option>
          <option>Polish</option>
        </select>
      </div>
    )
  }
}


export default LanguageSelect
