import React, { useEffect } from 'react'
import Button from '../../ui/Button'
import { scrollToForm } from '../../utils/scrollToForm'

import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './CatalogBlock.module.scss'

const CataloBlock = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className={styles.root} data-aos='fade-up'>
      <div className='wrapper'>
        <h1>ВАС ЗАЦІКАВИЛИ НАШІ ПРОПОЗИЦІЇ?</h1>
        <div onClick={scrollToForm} className={styles.button}>
          <Button title="Зв'язатись з консультантом" />
        </div>
      </div>
    </div>
  )
}

export default CataloBlock
