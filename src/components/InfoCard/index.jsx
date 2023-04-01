import React from 'react';
import styles from './InfoCard.module.scss';

const InfoCard = ({ id, title, description }) => {
  return (
    <div className={styles.root}>
      <div className={styles.circle}>{id}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default InfoCard;
