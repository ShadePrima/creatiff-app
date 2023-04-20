import React from 'react'
import { Link } from 'react-router-dom'

import logoEmail from '../../assets/icons/Email.svg'
import logoTelephone from '../../assets/icons/Telephone.svg'
import logo from '../../assets/Header/logo.svg'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.root}>
      <div className='wrapper'>
        <div className={styles.title}>
          <Link to='/'>
            <div className={styles.logo}>
              <img src={logo} alt='Logo' className={styles.logoIcon} />
              <p className={styles.logoText}>Creatiff - realizamos ideas</p>
            </div>
          </Link>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <img src={logoEmail} alt='Email' />
              <p className={styles.contactText}>
                <a href='mailto:star.creatiff@gmail.com'>
                  star.creatiff@gmail.com
                </a>
              </p>
            </div>
            <div className={styles.contact}>
              <img src={logoTelephone} alt='Telefone' />
              <p className={styles.contactText}>
                <a href='tel:951-392-250'>951 392 250</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
