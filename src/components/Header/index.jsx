import React from 'react';

import Numbers from '../Numbers';

import styles from './Header.module.scss';
import logoIcon from '../../assets/icons/Logo.png';
import logoEmail from '../../assets/icons/Email.png';
import logoTelephone from '../../assets/icons/Telephone.png';
import nineIcon from '../../assets/Numbers/nine-plus.png';
import twoIcon from '../../assets/Numbers/two-plus.png';
import twentyIcon from '../../assets/Numbers/twenty-plus.png';
import imgBkg from '../../assets/background/header-img.png';

const numberObj = [
  { id: 1, icon: nineIcon, text: 'Щасливих Клієнтів' },
  { id: 2, icon: twoIcon, text: 'Меблів Продано' },
  { id: 3, icon: twentyIcon, text: 'Збудованих конструкцій' },
];

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

        <div className={styles.content}>
          <div className={styles.contentText}>
            <div className={styles.contentTitle}>
              Загально - будівельні роботи ВІД CREATIFF
            </div>
            <div className={styles.contentDescription}>
              Тут буде текст про те, яка в нас класна компанія, який в нас
              великий спектр послуг, та що прям зараз ви можете замовити роботу,
              та замовити модульний будинок, меблі
            </div>
            <div className={styles.contentButtons}>
              <button className={styles.contenBtnWork}>Замовити роботу</button>
              <button className={styles.contentBtnBild}>Хочу будинок</button>
            </div>
            <Numbers items={numberObj} />
          </div>
          <div className={styles.contentImg}>
            <img src={imgBkg} alt='Header Item' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
