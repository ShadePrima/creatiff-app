import React, { useEffect, useState } from 'react'

import Numbers from '../Numbers'

import styles from './Header.module.scss'
import logoEmail from '../../assets/icons/Email.svg'
import logoTelephone from '../../assets/icons/Telephone.svg'
import nineIcon from '../../assets/Numbers/nine-plus.svg'
import twoIcon from '../../assets/Numbers/two-plus.svg'
import twentyIcon from '../../assets/Numbers/twenty-plus.svg'
import imgBkg from '../../assets/Header/header-img-1.png'
import imgBkg2 from '../../assets/Header/header-img-2.png'
import Logo from '../../ui/Logo'
import { scrollToForm } from '../../utils/scrollToForm'

const numberObj = [
  { id: 1, icon: nineIcon, text: 'Щасливих Клієнтів' },
  { id: 2, icon: twoIcon, text: 'Меблів Продано' },
  { id: 3, icon: twentyIcon, text: 'Збудованих конструкцій' },
]

const images = [imgBkg, imgBkg2]

const Header = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [index])

  return (
    <header className={styles.root}>
      <div className='wrapper'>
        <div className={styles.title}>
          <Logo />
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

        <div className={styles.content}>
          <div className={styles.contentText}>
            <div className={styles.contentTitle}>
              Загально - будівельні роботи ВІД CREATIFF
            </div>
            <div className={styles.contentDescription}>
              Тут буде текст про те, яка в нас класна компанія, який в нас
              великий спектр послуг, та що прям зараз ви можете замовити роботу,
              та замовити модульний будинок, меблі
            </div>
            <div className={styles.contentButtons}>
              <button onClick={scrollToForm} className={styles.contenBtnWork}>
                Замовити роботу
              </button>
              <button onClick={scrollToForm} className={styles.contentBtnBild}>
                Хочу будинок
              </button>
            </div>
            <Numbers items={numberObj} />
          </div>
          <div className={styles.contentImg}>
            <img src={images[index]} alt='Header Item' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
