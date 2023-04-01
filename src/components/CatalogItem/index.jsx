import React from 'react';
import catalogCheckTop from '../../assets/icons/check-top-icon.png';
import catalogIcon from '../../assets/icons/icon-background.png';

import styles from './CatalogItem.module.scss';

const CatalogItem = ({ id, title, handleMoreClick, isActive }) => {
  console.log(isActive, 'isActive');
  return (
    <div className={styles.catalogItem}>
      <div className={styles.leftConteiner}>
        <img src={catalogIcon} alt='Icon' className={styles.catalogIcon} />
        <div className={styles.catalogTitle}>{title}</div>
        {isActive && <p>test</p>}
      </div>
      <img
        onClick={() => handleMoreClick(id)}
        src={catalogCheckTop}
        alt='Check Top'
        className={styles.catalogCheck}
      />
    </div>
  );
};

export default CatalogItem;
