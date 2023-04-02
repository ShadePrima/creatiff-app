import React from 'react';
import cx from 'clsx';

import catalogCheckTop from '../../assets/icons/check-top-icon.png';
import catalogCheckBottom from '../../assets/icons/check-bottom-icon.png';
import catalogIcon from '../../assets/icons/icon-background.png';

import styles from './CatalogItem.module.scss';

const CatalogItem = ({ id, title, handleMoreClick, isActive }) => {
  console.log(isActive, 'isActive');
  return (
    <div
      onClick={() => handleMoreClick(id)}
      className={cx(styles.catalogItem, isActive && styles.openItem)}
    >
      <div className={styles.leftConteiner}>
        <img src={catalogIcon} alt='Icon' className={styles.catalogIcon} />
        <div className={cx(isActive && styles.titleConteiner)}>
          <div className={styles.catalogTitle}>{title}</div>
          {isActive && (
            <p className={styles.catalogDescription}>
              Серед наших типов вікон маємо: вхідні, міжкімнатні,
              металопластикові
            </p>
          )}
        </div>
      </div>
      {isActive ? (
        <img
          onClick={() => handleMoreClick(id)}
          src={catalogCheckTop}
          alt='Check Top'
          className={styles.catalogCheck}
        />
      ) : (
        <img
          onClick={() => handleMoreClick(id)}
          src={catalogCheckBottom}
          alt='Check Top'
          className={styles.catalogCheck}
        />
      )}
    </div>
  );
};

export default CatalogItem;
