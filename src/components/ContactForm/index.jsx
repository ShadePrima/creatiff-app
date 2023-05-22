import React, { useEffect, useState } from 'react'
import Input from '../../ui/Input'

import nameIcon from '../../assets/ContactForm/name.svg'
import mailIcon from '../../assets/ContactForm/mail.svg'
import phoneIcon from '../../assets/ContactForm/phone.svg'
import Button from '../../ui/Button'

import AOS from 'aos'
import 'aos/dist/aos.css'
import styles from './ContactForm.module.scss'
import axios from 'axios'

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  console.log(form, 'form')

  useEffect(() => {
    AOS.init()
  }, [])

  const handleInput = (event) => {
    const { target } = event
    const value = target.value

    setForm((prevForm) => ({
      ...prevForm,
      [target.name]: value,
    }))
  }

  const handSubmit = async (event) => {
    event.preventDefault()

    try {
      const token = '88e021c16c9e26ef55cdae66219a2f81a6665534'

      const response = await axios.post(
        'http://16.16.208.23:8000/feedback/',
        form,
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
            Referer: window.location.href,
          },
        }
      )
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <form onSubmit={handSubmit}>
          <div className={styles.formContainer}>
            <h1 id='contactForm' data-aos='zoom-in'>
              ВИНИКЛИ ПИТАННЯ? НАПИШИ НАМ
            </h1>
            <div className={styles.inputs} data-aos='zoom-in'>
              <Input
                id='name'
                name='name'
                type='text'
                title={nameIcon}
                placeholder='Остап Бендер'
                value={form.name}
                onChange={handleInput}
              />
              <Input
                id='email'
                name='email'
                type='email'
                title={mailIcon}
                placeholder='ostapbender@gmail.com'
                value={form.email}
                onChange={handleInput}
              />
              <Input
                disabled
                type='tel'
                id='tel'
                name='tel'
                title={phoneIcon}
                placeholder='+34 951 392 250'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                value={form.tel}
                onChange={handleInput}
              />
            </div>

            <div className={styles.textArea} data-aos='zoom-in'>
              <label htmlFor='story'>Ваш Лист</label>
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='10'
                className={styles.text}
                value={form.message}
                onChange={handleInput}
              ></textarea>
            </div>

            <div className={styles.button} data-aos='fade-up'>
              <Button
                type='submit'
                title='Надіслати листа'
                width='356px'
                height='56px'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
