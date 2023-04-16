import React from 'react'
import styles from './Logo.module.scss'
import logoIcon from '../../assets/icons/Logo.svg'

const Logo = () => {
  return (
    <div className={styles.logoItems}>
      <img src={logoIcon} alt='Logo' />
      <p className={styles.logoTitle}>Creatiff - realizamos ideas</p>
    </div>
  )
}

export default Logo
