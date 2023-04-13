import React from 'react'
import styles from './CardV2.module.scss'
import homeIcon from '../../assets/icons/Home.svg'

const CardV2 = ({ title }) => {
  return (
    <div className={styles.root}>
      <img src={homeIcon} alt='Home' className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className={styles.button}>читати далі</button>
    </div>
  )
}

export default CardV2
