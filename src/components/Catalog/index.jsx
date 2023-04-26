import React, { useEffect } from 'react'
import catalogPhoto from '../../assets/background/catalog.png'
import autoAnimate from '@formkit/auto-animate'
import catalogCheckTop from '../../assets/icons/check-top-icon.svg'
import catalogCheckBottom from '../../assets/icons/check-bottom-icon.svg'
import catalogIcon from '../../assets/icons/icon-background.svg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './Catalog.module.scss'

const catalogList = [
  {
    id: 1,
    title: 'Великий ассортимент дверей для вашого дому',
    description:
      'Серед наших типов дверей маємо: вхідні, міжкімнатні, металопластикові',
  },
  {
    id: 2,
    title: 'Маємо вікна для кожного вашого випадку',
    description:
      'Серед наших типів вікон маємо: вхідні, міжкімнатні, металопластикові',
  },
  {
    id: 3,
    title: 'Величезний каталог будь-якої мебелі',
    description: 'Серед наших типів меблів маємо: великі, середні, металенькі',
  },
  {
    id: 4,
    title: 'Найрізноманітніші товари для вашого дому',
    description:
      'Серед наших типів товарів маємо: гарні, ще кращі, повний улет',
  },
]

const Catalog = () => {
  const [acitveIndex, setActiveIndex] = React.useState(1)
  const parent = React.useRef(null)

  useEffect(() => {
    AOS.init()
  }, [])

  React.useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const handleMoreClick = (id) => {
    setActiveIndex(id)
  }

  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <div className={styles.container}>
          <img
            src={catalogPhoto}
            data-aos='fade-right'
            alt='Catalog'
            className={styles.image}
          />
          <div className={styles.catalog} data-aos='fade-left'>
            <h1 className={styles.title}>
              Також ми маємо все необхідне для вашого дому
            </h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div ref={parent} className={styles.catalogItems}>
              {catalogList.map((obj) =>
                acitveIndex === obj.id ? (
                  <PanelOpen
                    key={obj.id}
                    id={obj.id}
                    title={obj.title}
                    handleMoreClick={handleMoreClick}
                    isActive={acitveIndex === obj.id}
                  />
                ) : (
                  <Panel
                    key={obj.id}
                    id={obj.id}
                    title={obj.title}
                    handleMoreClick={handleMoreClick}
                    isActive={acitveIndex === obj.id}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Panel({ id, title, handleMoreClick, isActive }) {
  return (
    <div onClick={() => handleMoreClick(id)} className={styles.catalogItem}>
      <div className={styles.leftConteiner}>
        <img src={catalogIcon} alt='Icon' className={styles.catalogIcon} />
        <div>
          <div className={styles.catalogTitle}>{title}</div>
        </div>
      </div>
      {isActive ? (
        <img
          onClick={() => handleMoreClick(id)}
          src={catalogCheckTop}
          alt='Check Top'
          className={styles.catalogCheck}
        />
      ) : (
        <img
          onClick={() => handleMoreClick(id)}
          src={catalogCheckBottom}
          alt='Check Top'
          className={styles.catalogCheck}
        />
      )}
    </div>
  )
}

function PanelOpen({ id, title, handleMoreClick, isActive }) {
  return (
    <div onClick={() => handleMoreClick(id)} className={styles.panelOpen}>
      <div className={styles.leftConteiner}>
        <img src={catalogIcon} alt='Icon' className={styles.catalogIcon} />
        <div className={styles.titleConteiner}>
          <div className={styles.catalogTitle}>{title}</div>
          <p className={styles.panelDescription}>
            Серед наших типов вікон маємо: вхідні, міжкімнатні, металопластикові
          </p>
        </div>
      </div>
      {isActive ? (
        <img
          onClick={() => handleMoreClick(id)}
          src={catalogCheckTop}
          alt='Check Top'
          className={styles.catalogCheck}
        />
      ) : (
        <img
          onClick={() => handleMoreClick(id)}
          src={catalogCheckBottom}
          alt='Check Top'
          className={styles.catalogCheck}
        />
      )}
    </div>
  )
}

export default Catalog
