import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.querySelector('#modalRoot');

class Portal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      modalRoot
    );
  }
}

export default Portal;
