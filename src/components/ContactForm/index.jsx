import React, { useState } from 'react'
import Input from '../../ui/Input'

import styles from './ContactForm.module.scss'
import nameIcon from '../../assets/ContactForm/name.png'
import mailIcon from '../../assets/ContactForm/mail.png'
import phoneIcon from '../../assets/ContactForm/phone.png'
import Button from '../../ui/Button'

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    tel: '',
    letter: '',
  })
  console.log(form, 'form')

  const handleInput = (event) => {
    const { target } = event
    const value = target.value

    setForm((prevForm) => ({
      ...prevForm,
      [target.name]: value,
    }))
  }

  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <div className={styles.formContainer}>
          <h1 id='contactForm'>поговоримо</h1>
          <div className={styles.inputs}>
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

          <div className={styles.textArea}>
            <label htmlFor='story'>Ваш Лист</label>
            <textarea
              name='letter'
              id='letter'
              cols='30'
              rows='10'
              className={styles.text}
              value={form.letter}
              onChange={handleInput}
            ></textarea>
          </div>

          <div className={styles.button}>
            <Button title='Надіслати листа' width='356px' height='56px' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
