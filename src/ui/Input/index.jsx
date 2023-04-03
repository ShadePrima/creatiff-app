import React from 'react';
import styles from './Input.module.scss';

const Input = ({ title, placeholder, type }) => {
  return (
    <div className={styles.root}>
      <img src={title} alt='Name' className={styles.titleIcon} />
      <input type={type} className={styles.input} placeholder={placeholder} />
    </div>
  );
};

export default Input;
