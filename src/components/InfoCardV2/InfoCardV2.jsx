import React from 'react'
import styles from './InfoCardV2.module.scss'
import CardV2 from '../CardV2/CardV2'

const contentCard = [
  {
    id: 1,
    title: 'Виготовлення будинків з морських контейнерів',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Продаж промислового обладнання',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Виробництво металоконструкцій',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    title: 'Продаж промислового обладнання',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 5,
    title: 'Вікна та двері',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 6,
    title: 'Загальнобудівельні види робіт',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const InfoCardV2 = ({ index }) => {
  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <div className={styles.conteiner}>
          {contentCard.map((item, index) => (
            <CardV2 key={item.id} title={item.title} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfoCardV2
