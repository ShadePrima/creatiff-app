import React from 'react';
import styles from './Catalog.module.scss';
import catalogPhoto from '../../assets/background/catalog.png';
import CatalogItem from '../CatalogItem';

const catalogList = [
  {
    id: 1,
    title: 'Великий ассортимент дверей для вашого дому',
    description:
      'Серед наших типов дверей маємо: вхідні, міжкімнатні, металопластикові',
  },
  {
    id: 2,
    title: 'Маємо вікна для кожного вашого випадку',
    description:
      'Серед наших типів вікон маємо: вхідні, міжкімнатні, металопластикові',
  },
  {
    id: 3,
    title: 'Величезний каталог будь-якої мебелі',
    description: 'Серед наших типів меблів маємо: великі, середні, металенькі',
  },
  {
    id: 4,
    title: 'Найрізноманітніші товари для вашого дому',
    description:
      'Серед наших типів товарів маємо: гарні, ще кращі, повний улет',
  },
];

const Catalog = () => {
  const [acitveIndex, setActiveIndex] = React.useState(1);

  const handleMoreClick = (id) => {
    setActiveIndex(id);
  };

  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <div className={styles.container}>
          <img src={catalogPhoto} alt='Catalog' className={styles.image} />
          <div className={styles.catalog}>
            <h1 className={styles.title}>
              Також ми маємо все необхідне для вашого дому
            </h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className={styles.catalogItems}>
              {catalogList.map((obj) => (
                <CatalogItem
                  key={obj.id}
                  id={obj.id}
                  title={obj.title}
                  handleMoreClick={handleMoreClick}
                  isActive={acitveIndex === obj.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
