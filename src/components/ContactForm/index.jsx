import React from 'react';
import Input from '../../ui/Input';

import styles from './ContactForm.module.scss';
import nameIcon from '../../assets/ContactForm/name.png';
import mailIcon from '../../assets/ContactForm/mail.png';
import phoneIcon from '../../assets/ContactForm/phone.png';
import Button from '../../ui/Button';

const ContactForm = () => {
  return (
    <div className={styles.root}>
      <div className='wrapper'>
        <div className={styles.formContainer}>
          <h1>поговоримо</h1>
          <div className={styles.inputs}>
            <Input type='text' title={nameIcon} placeholder='Остап Бендер' />
            <Input
              type='email'
              title={mailIcon}
              placeholder='ostapbender@gmail.com'
            />
            <Input
              type='tel'
              title={phoneIcon}
              placeholder='+34 951 392 250'
              pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
            />
          </div>

          <div className={styles.textArea}>
            <label htmlFor='story'>Ваш Лист</label>
            <textarea
              name='story'
              id='story'
              cols='30'
              rows='10'
              className={styles.text}
            ></textarea>
          </div>

          <div className={styles.button}>
            <Button title='Надіслати листа' width='356px' height='56px' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
