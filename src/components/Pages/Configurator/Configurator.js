import React, { Component } from 'react';
import Progress from '../Configurator/Progress/Progress';
import Preview from './Preview/Preview';
import Settings from './Settings/Settings';
import { toggleDoorTypeVisibility } from '../../../store/actions/app';
import { connect } from 'react-redux';

import styles from './styles.scss';

class Configurator extends Component {

  state = {
    doorType: 'single',
    doorWidth: 120,
    doorHeight: 250,
    step: 1,
    beamsNumber: 4,
    postsNumber: 2,
  }

  toggleDoorTypeModal = () => {
    this.props.toggleDoorModal();
    
    const appContainer = document.body.querySelector('.AppContainer--29Dl7');
    appContainer.classList.toggle('AppContainerBlur--2il6s');
  }

  addBeam = () => {
    this.setState({
      beamsNumber: this.state.beamsNumber + 1
    })
  }
  minusBeam = () => {
    this.setState({
      beamsNumber: this.state.beamsNumber - 1
    })
  }

  addPost = () => {
    this.setState({
      postsNumber: this.state.postsNumber + 1
    })
  }
  minusPost = () => {
    this.setState({
      postsNumber: this.state.postsNumber - 1
    })
  }

  nextStep = () => {
    if(this.state.step === 3) return;
    
    this.setState({
      step: this.state.step + 1
    })
  }

  previousStep = () => {
    this.setState({
      step: this.state.step - 1
    })
  }



  render () {
    const { step, beamsNumber, postsNumber } = this.state;
    const { doorTypeModalVisibility } = this.props;
    return (
      <div className={styles.ConfiguratorWrapper}>
        <Progress step={step} />
        <div className={styles.DoorTypeWrapper}>
          <Preview />
          <Settings
            step={step}
            toggleModal={this.toggleDoorTypeModal}
            doorTypeModalVisibility={doorTypeModalVisibility}
            addBeam={this.addBeam}
            minusBeam={this.minusBeam}
            addPost={this.addPost}
            minusPost={this.minusPost}
            postsNumber={postsNumber}
            beamsNumber={beamsNumber}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    doorTypeModalVisibility: state.app.doorTypeModalVisibility,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleDoorModal: () => dispatch(toggleDoorTypeVisibility())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Configurator);