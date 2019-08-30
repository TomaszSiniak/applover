import React from 'react';
import styles from './styles/main.scss';
import MainContent from './layout/MainContent/MainContent';

const App = () => {

  // getToken = () => {
  //   const token = localStorage.getItem('token');
  //   console.log(token)
  //   return token;
  // }
  const token = localStorage.getItem('token');
  return (
    <div className={styles.AppContainer}>
      <MainContent token={token}/>
    </div>
  )
}
export default App;