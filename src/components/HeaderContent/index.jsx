import React, { useEffect, useState } from 'react'
import clsx from 'clsx'

import { scrollToForm } from '../../utils/scrollToForm'

import Numbers from '../Numbers'
import nineIcon from '../../assets/Numbers/nine-plus.svg'
import twoIcon from '../../assets/Numbers/two-plus.svg'
import twentyIcon from '../../assets/Numbers/twenty-plus.svg'
import imgBkg from '../../assets/Header/header-img-1.png'
import imgBkg2 from '../../assets/Header/header-img-2.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './HeaderContent.module.scss'

const numberObj = [
  { id: 1, icon: nineIcon, text: 'Щасливих Клієнтів' },
  { id: 2, icon: twoIcon, text: 'Меблів Продано' },
  { id: 3, icon: twentyIcon, text: 'Збудованих конструкцій' },
]

const images = [imgBkg, imgBkg2]

const HeaderContent = () => {
  const [index, setIndex] = useState(0)
  const [firstImg, setFirstImg] = useState(true)
  console.log(index, 'index')

  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstImg(false)
      setIndex((index + 1) % images.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [index])

  const currentImage = images[index]

  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <div className={styles.content}>
          <div className={styles.contentText} data-aos='fade-right'>
            <div className={styles.contentTitle}>
              CREATIFF <br /> Ми робимо все
            </div>
            <div className={styles.contentDescription}>
              Тут буде текст про те, яка в нас класна компанія, який в нас
              великий спектр послуг, та що прям зараз ви можете замовити роботу,
              та замовити модульний будинок, меблі
            </div>
            <div className={styles.contentButtons}>
              <button onClick={scrollToForm} className={styles.contenBtnWork}>
                Реалізувати ідею
              </button>
            </div>
            <Numbers items={numberObj} />
          </div>
          <div className={styles.contentImg} data-aos='fade-lef'>
            <img
              className={firstImg ? styles.imageFirst : styles.image}
              src={currentImage}
              alt='Header Item'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderContent
