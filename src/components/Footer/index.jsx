import React from 'react';
import styles from './Footer.module.scss';
import emailIcon from '../../assets/icons/Email.svg';
import phoneIcon from '../../assets/icons/Telephone.svg';
import instaIcon from '../../assets/icons/Instagram.svg';
import faceIcon from '../../assets/icons/Facebook.svg';
import Logo from '../../ui/Logo';

const contacts = [
  { id: 1, title: 'star.creatiff@gmail.com', icon: emailIcon },
  { id: 2, title: '951 392 250', icon: phoneIcon },
  { id: 3, title: 'Instagram', icon: instaIcon },
  { id: 4, title: 'Facebook', icon: faceIcon },
];

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <div className={styles.container}>
          <h2 className={styles.title}>Зворотній в’язок</h2>
          <div className={styles.contacts}>
            {contacts.map((contact) => (
              <div key={contact.id} className={styles.contact}>
                <img src={contact.icon} alt={contact.title} />
                <p>{contact.title}</p>
              </div>
            ))}
          </div>
          <div className={styles.labels}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <p className={styles.copyright}>
              © 2022 Creatiff. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
