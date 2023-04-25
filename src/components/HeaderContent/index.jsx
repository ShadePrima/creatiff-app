import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useInterval } from 'react-interval'

import Numbers from '../Numbers'

import { scrollToForm } from '../../utils/scrollToForm'

import nineIcon from '../../assets/Numbers/nine-plus.svg'
import twoIcon from '../../assets/Numbers/two-plus.svg'
import twentyIcon from '../../assets/Numbers/twenty-plus.svg'
import imgBkg from '../../assets/Header/header-img-1.png'
import imgBkg2 from '../../assets/Header/header-img-2.png'

import styles from './HeaderContent.module.scss'

const numberObj = [
  { id: 1, icon: nineIcon, text: 'Щасливих Клієнтів' },
  { id: 2, icon: twoIcon, text: 'Меблів Продано' },
  { id: 3, icon: twentyIcon, text: 'Збудованих конструкцій' },
]

const images = [imgBkg, imgBkg2]

const HeaderContent = () => {
  // const [index, setIndex] = useState(0)
  // const [showImage1, setShowImage1] = useState(true)
  // const [showImage2, setShowImage2] = useState(false)
  // console.log(showImage1)
  // console.log(showImage2)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((index + 1) % images.length)
  //     setShowImage1((prev) => !prev)
  //     setShowImage2((prev) => !prev)
  //   }, 5000)

  //   return () => clearInterval(interval)
  // }, [showImage1, showImage2])

  // useInterval(() => {
  //   setShowImage1((prev) => !prev)
  //   setShowImage2((prev) => !prev)
  // }, 10000)

  const [index, setIndex] = useState(0)
  console.log(index, 'index')

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % images.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [index])

  const currentImage = images[index]

  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <div className={styles.content}>
          <div className={styles.contentText}>
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
          <div className={styles.contentImg}>
            <img
              className={styles.image}
              src={currentImage}
              alt='Header Item'
            />
            {/* <CSSTransition in={showImage1} timeout={500} classNames='fade'>
              <img src={currentImage} alt='First' />
            </CSSTransition>
            <CSSTransition in={showImage2} timeout={500} classNames='fade'>
              <img src={imgBkg2} alt='Second' />
            </CSSTransition> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderContent
