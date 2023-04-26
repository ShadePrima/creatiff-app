import React, { useEffect } from 'react'
import emailIcon from '../../assets/icons/Email.svg'
import phoneIcon from '../../assets/icons/Telephone.svg'
import instaIcon from '../../assets/icons/Instagram.svg'
import faceIcon from '../../assets/icons/Facebook.svg'
import LogoFooter from '../../ui/LogoFooter'

import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './Footer.module.scss'

const contacts = [
  {
    id: 1,
    title: 'star.creatiff@gmail.com',
    icon: emailIcon,
    link: 'mailto:star.creatiff@gmail.com',
  },
  { id: 2, title: '951 392 250', icon: phoneIcon, link: 'tel:951-392-250' },
  {
    id: 3,
    title: 'Instagram',
    icon: instaIcon,
    link: 'https://www.instagram.com',
  },
  {
    id: 4,
    title: 'Facebook',
    icon: faceIcon,
    link: 'https://www.facebook.com',
  },
]

const Footer = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <div className={styles.container} data-aos='fade-up'>
          <h2 className={styles.title}>Зворотній в’язок</h2>
          <div className={styles.contacts}>
            {contacts.map((contact) => (
              <div key={contact.id} className={styles.contact}>
                <img src={contact.icon} alt={contact.title} />
                <p>
                  <a href={contact.link}>{contact.title}</a>{' '}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.labels}>
            <div className={styles.logo}>
              <LogoFooter />
            </div>
            <p className={styles.copyright}>
              © 2022 Creatiff. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
