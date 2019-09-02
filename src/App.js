import React from 'react';
import styles from './styles/main.scss';
import MainContent from './layout/MainContent/MainContent';
import { tokenCheck } from './store/actions/login';
import { connect } from 'react-redux';

const App = props => {

  const token = localStorage.getItem('token');
  const settings = localStorage.getItem('remember');
  console.log(settings);
  
  if(token && settings === 'true') props.auth();

  return (
    <div className={styles.AppContainer}>
      <MainContent />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    auth: () => dispatch(tokenCheck())
  }
}
export default connect(null, mapDispatchToProps)(App);