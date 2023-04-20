import React from 'react'

import styles from './Number.module.scss'

const Numbers = ({ items }) => {
  return (
    <div className={styles.root}>
      {items.map((obj) => (
        <div key={obj.id} className={styles.wrapper}>
          <img src={obj.icon} alt={obj.text} />
          <p>{obj.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Numbers
