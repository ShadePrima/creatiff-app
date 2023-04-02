import React from 'react';
import Button from '../../ui/Button';
import styles from './CatalogBlock.module.scss';

const CataloBlock = () => {
  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <h1>ВАС ЗАЦІКАВИЛИ НАШІ РОБОТИ?</h1>
        <div className={styles.button}>
          <Button title='Перейти до каталогу' />
        </div>
        <p>
          або <span>зв’яжиться</span> з нами
        </p>
      </div>
    </div>
  );
};

export default CataloBlock;
