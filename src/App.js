import React from 'react';
import styles from './styles/main.scss';
import MainContent from './layout/MainContent/MainContent';

const App = () => {

  const token = localStorage.getItem('token');
  return (
    <div className={styles.AppContainer}>
      <MainContent token={token}/>
    </div>
  )
}
export default App;