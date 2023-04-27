import React, { useEffect } from 'react'
import Button from '../../ui/Button'
import backgroundImage from '../../assets/Advantages/background.png'
import heartIcon from '../../assets/Advantages/heart.svg'
import lukasIcon from '../../assets/Advantages/Lukas.svg'
import toolsIcon from '../../assets/Advantages/Tools.svg'
import { scrollToForm } from '../../utils/scrollToForm'

import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './Advantages.module.scss'

const list = [
  { id: 1, title: 'Якість та гарантії', icone: lukasIcon },
  { id: 2, title: 'Робимо з любов’ю', icone: heartIcon },
  { id: 3, title: 'Наші переваги', icone: toolsIcon },
  { id: 4, title: 'Якість та гарантії', icone: lukasIcon },
  { id: 5, title: 'Робимо з любов’ю', icone: heartIcon },
  { id: 6, title: 'Наші переваги', icone: toolsIcon },
]

const Advantages = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className={styles.root}>
      <div className={`${'wrapper'} ${styles.flexContainer}`}>
        <div className={styles.content} data-aos='flip-left'>
          <h1>Ми можемо відтворити все, що ви тільки забажаєте!</h1>
          <p className={styles.contentText}>
            Тут буде текст про те, як ми вміємо робити меблі на замовлення,
            наприклад через картинки з Pinterest, враховуючи всі побажання. А
            знизу ми покажемо наші переваги, або щось на вибір.
          </p>
          <div className={styles.list}>
            {list.map((obj) => (
              <div key={obj.id} className={styles.listItem}>
                <img src={obj.icone} alt={obj.title} />
                <p>{obj.title}</p>
              </div>
            ))}
          </div>
          <div onClick={scrollToForm} className={styles.button}>
            <Button title='Зв’язатися з нами' />
          </div>
        </div>
        <img
          src={backgroundImage}
          data-aos='flip-left'
          alt='background'
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default Advantages
