import React, { useEffect } from 'react'
import partnerIcon from '../../assets/Partners/partner.png'

import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './Partners.module.scss'

const partners = [
  { id: 1, icone: partnerIcon },
  { id: 2, icone: partnerIcon },
  { id: 3, icone: partnerIcon },
  { id: 4, icone: partnerIcon },
  { id: 5, icone: partnerIcon },
  { id: 6, icone: partnerIcon },
]

const Partners = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className={styles.root} data-aos='fade-up'>
      <div className={`${'wrapper'} ${styles.container}`}>
        <div>
          <p className={styles.title}>Наші Партнери:</p>
          <div className={styles.flexContainer}>
            {partners.map((partner) => (
              <div key={partner.id}>
                <img src={partner.icone} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
