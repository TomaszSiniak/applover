import React, { Component } from 'react'
import Door from './Door/Door';
import styles from './styles.scss';

class Preview extends Component {
  render() {
    return (
      <div className={styles.PreviewWrapper}>
          <Door />
      </div>
    )
  }
}

export default Preview;