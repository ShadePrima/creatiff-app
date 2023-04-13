import React from 'react'
import styles from './CardGallery.module.scss'
// import image from '../../assets/Gallery/image.png'

const CardGallery = ({ image, title }) => {
  return (
    <div className={styles.root}>
      <img src={image} alt='measuring tape' className={styles.image} />
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export default CardGallery
