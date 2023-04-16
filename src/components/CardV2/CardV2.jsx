import React from 'react'
import styles from './CardV2.module.scss'
import homeIcon from '../../assets/icons/Home.svg'
import { Link } from 'react-router-dom'

const CardV2 = ({ title, index }) => {
  return (
    <div className={styles.root}>
      <img src={homeIcon} alt='Home' className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Link to={`/${index}`}>
        <button className={styles.button}>читати далі</button>
      </Link>
    </div>
  )
}

export default CardV2
