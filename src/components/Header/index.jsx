import React from 'react';

import styles from './Header.module.scss';
import logoIcon from '../../assets/icon/Logo.png';
import logoEmail from '../../assets/icon/Email.png';
import logoTelephone from '../../assets/icon/Telephone.png';

const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.logoItems}>
            <img className={styles.logoIcon} src={logoIcon} alt='Logo' />
            <p className={styles.logoTitle}>Creatiff - realizamos ideas</p>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <img src={logoEmail} alt='Email' />
              <p className={styles.contactText}>star.creatiff@gmail.com</p>
            </div>
            <div className={styles.contact}>
              <img src={logoTelephone} alt='Telefone' />
              <p className={styles.contactText}>951 392 250</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
