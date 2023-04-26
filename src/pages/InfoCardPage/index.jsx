import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { cardsInfoList } from '../../helpers/cardsInfoList'
import ScrollToTop from '../../utils/scrollToTop'

import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './InfoCardPage.module.scss'
import Header from '../../components/Header'

const InfoCardPage = ({ setLoading }) => {
  const { id } = useParams()
  const card = cardsInfoList[id]

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Header />
      <div className={styles.root}>
        <ScrollToTop />
        <div className='wrapper'>
          <div className={styles.container}>
            <img
              src={card.image1}
              data-aos='fade-up'
              data-aos-anchor-placement='center-bottom'
              alt='Build1'
              className={styles.image1}
            />
            <div className={styles.containerText}>
              <h2 className={styles.title}>{card.title1}</h2>
              <p className={styles.text}>{card.text1}</p>
            </div>

            <img src={card.image2} alt='Build1' className={styles.image2} />
            <div className={styles.containerText}>
              <h2 className={styles.title}>{card.title2}</h2>
              <p className={styles.text}>{card.text2}</p>
            </div>

            <img src={card.image3} alt='Build1' className={styles.image3} />
            <div className={styles.containerText}>
              <h2 className={styles.title}>{card.title3}</h2>
              <p className={styles.text}>{card.text3}</p>
            </div>

            <img src={card.image4} alt='Build1' className={styles.image4} />
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoCardPage
