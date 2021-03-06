import React, { Component } from 'react';
import InfoIcon from '../../../../assets/img/info.svg';
import DoorTypeModal from '../DoortypeModal/DoortypeModal';
import Buttons from '../Buttons/Buttons';
import Portal from '../../Portal/Portal';
import styles from './settings.scss';

class Settings extends Component {

  renderChooseDoorDivision = () => {
    const { beamsNumber, addBeam, minusBeam, addPost, postsNumber, minusPost, step, nextStep, previousStep } = this.props;
    return (
      <div className={styles.SettingsWrapper}>
        <div className={styles.SettingsPart}>
          <div className={styles.SettingsPartTitle}>Door division</div>
          <div className={styles.DoorDivisionDataRow}>
            <div className={styles.DoorDivisionDataTitle}>Numbers of beams</div>
            <div className={styles.DoorDivisionCounterWrapper}>
              <input className={styles.DoorDivisionNumber} disabled value={`${beamsNumber}`} />
              <button className={styles.DoorDivisionCounter} onClick={addBeam}>+</button>
              <button className={styles.DoorDivisionCounter} onClick={minusBeam}>-</button>
            </div>
          </div>
          <div className={styles.DoorDivisionDataRow}>
            <div className={styles.DoorDivisionDataTitle}>Numbers of posts</div>
            <div className={styles.DoorDivisionCounterWrapper}>
              <input className={styles.DoorDivisionNumber} disabled value={`${postsNumber}`} />
              <button className={styles.DoorDivisionCounter} onClick={addPost}>+</button>
              <button className={styles.DoorDivisionCounter} onClick={minusPost}>-</button>
            </div>
          </div>
        </div>
        <Buttons step={step} nextStep={nextStep} previousStep={previousStep} />
      </div>
    )
  }

  renderColorDoor = () => {
    const { step, nextStep, previousStep } = this.props;
    return (
      <div className={styles.SettingsWrapper}>
        <div className={styles.SettingsPart}>
          <div className={styles.SettingsPartTitle}>Choose color</div>
          <div className={styles.SettingsColorWrapper}>
            <div className={styles.SettingColorOption}>
              <div className={styles.SettingColorView} />
              <label className={styles.CheckboxWrapper}>Black
                <input type="radio" name="door-color" />
                <span className={styles.Checkmark}></span>
              </label>
            </div>
            <div className={styles.SettingColorOption}>
              <div className={styles.SettingColorView} style={{background: '#797474'}}/>
              <label className={styles.CheckboxWrapper}>Gray
                <input type="radio" name="door-color" />
                <span className={styles.Checkmark}></span>
              </label>
            </div>
            <div className={styles.SettingColorOption}>
              <div className={styles.SettingColorView} style={{background: '#F4F2F2'}}/>
              <label className={styles.CheckboxWrapper}>White
                <input type="radio" name="door-color"/>
                <span className={styles.Checkmark}></span>
              </label>
            </div>
          </div>
        </div>
        <Buttons step={step} nextStep={nextStep} previousStep={previousStep} />
      </div>
    )
  }

  render() {
    const { step, toggleModal, doorTypeModalVisibility, nextStep, previousStep } = this.props;

    if (step === 2) return this.renderChooseDoorDivision();
    if (step === 3) return this.renderColorDoor();

    return (
      <div className={styles.SettingsWrapper}>
        <div className={styles.SettingsPart}>
          <div className={styles.SettingsPartTitle}>Door Type
            <figure className={styles.InfoIconWrapper} onClick={toggleModal}>
              <img src={InfoIcon} />
            </figure>
          </div>
          <label className={styles.CheckboxWrapper}>Single door
          <input type="radio" name="door-select" checked />
            <span className={styles.Checkmark}></span>
          </label>
          <label className={styles.CheckboxWrapper}>Double door
          <input type="radio" name="door-select" />
            <span className={styles.Checkmark}></span>
          </label>
        </div>
        <div className={styles.SettingsPart}>
          <div className={styles.SettingsPartTitle}>Door Size</div>
          <div className={styles.DoorSizeInputWrapper}>
            <label className={styles.InputLabel}>Width</label>
            <input className={styles.DoorSizeInput} type="number" defaultValue="200" />
          </div>
          <div className={styles.DoorSizeInputWrapper}>
            <label className={styles.InputLabel}>Height</label>
            <input className={styles.DoorSizeInput} type="number" defaultValue="250" />
          </div>
        </div>
        <Buttons step={step} nextStep={nextStep} previousStep={previousStep} />
        {doorTypeModalVisibility && (
          <Portal>
            <DoorTypeModal toggleModal={toggleModal} />
          </Portal>
        )}
      </div>
    )
  }
}

export default Settings;