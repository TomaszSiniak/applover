import React from 'react';
import styles from './styles/main.scss';
import MainContent from './layout/MainContent/MainContent';

const App = () => {
  return (
    <div className={styles.AppContainer}>
      <MainContent />
    </div>
  )
}
export default App;