import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import logoEmail from '../../assets/icons/Email.svg'
import logoTelephone from '../../assets/icons/Telephone.svg'
import logo from '../../assets/Header/logo.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './Header.module.scss'
import { useTranslation } from 'react-i18next'

const Header = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const { i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className={styles.root}>
      <div className='wrapper'>
        <div className={styles.title} data-aos='fade-down'>
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
            <button onClick={() => changeLanguage('en')}>En</button>
            <button onClick={() => changeLanguage('uk')}>Uk</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
