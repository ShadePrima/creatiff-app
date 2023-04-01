import React from 'react';
import styles from './Services.module.scss';
import arrwLeftIcon from '../../assets/Services/arrow-left.png';

const Services = () => {
  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <div className={styles.leftBlock}>
          <h1 className={styles.title}>НАШ ВЕЛИКИЙ СПЕКТР ПОСЛУГ</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <img src={arrwLeftIcon} alt='Arrow Left' className={styles.arrow} />
        </div>

        <div className={styles.rightBlock}>Test</div>
      </div>
    </div>
  );
};

export default Services;
