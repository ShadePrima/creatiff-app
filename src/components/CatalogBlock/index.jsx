import React from 'react'
import Button from '../../ui/Button'
import { scrollToForm } from '../../utils/scrollToForm'
import styles from './CatalogBlock.module.scss'

const CataloBlock = () => {
  return (
    <div className={styles.root}>
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
