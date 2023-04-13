import React from 'react'
import styles from './Gallery.module.scss'
import CardGallery from '../CardGallery/CardGallery'
import image from '../../assets/Gallery/image.png'

const contentGallery = [
  { id: 1, image: image, title: 'наші роботи' },
  { id: 2, image: image, title: 'ми на праці' },
  { id: 3, image: image, title: 'приклади меблів' },
  { id: 4, image: image, title: 'наші будівлі' },
  { id: 5, image: image, title: 'наші роботи' },
  { id: 6, image: image, title: 'наша галерея' },
]

const Gallery = () => {
  return (
    <div className={styles.roor}>
      <div className='wrapper'>
        <h1 className={styles.title}>Галерея наших робіт</h1>
        <div className={styles.container}>
          {contentGallery.map((item) => (
            <div key={item.id}>
              <CardGallery image={item.image} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
