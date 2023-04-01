import React from 'react';
import styles from './Services.module.scss';
import arrwLeftIcon from '../../assets/Services/arrow-left.png';
import InfoCard from '../InfoCard';

const infoCardObj = [
  {
    id: 1,
    title: 'Модульні будинки з морських контейнерів',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Переробка відходів',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Металообробка та розробка металоконструкцій',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    title: 'Продаж промислового обладнання',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const Services = () => {
  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <div className={styles.mainBlock}>
          <div className={styles.leftBlock}>
            <h1 className={styles.title}>НАШ ВЕЛИКИЙ СПЕКТР ПОСЛУГ</h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <img src={arrwLeftIcon} alt='Arrow Left' className={styles.arrow} />
          </div>

          <div className={styles.rightBlock}>
            {infoCardObj.map((obj) => (
              <InfoCard
                key={obj.id}
                id={obj.id}
                title={obj.title}
                description={obj.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
