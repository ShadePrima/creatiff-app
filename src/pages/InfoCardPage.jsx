import React from 'react'
import { Link, useParams } from 'react-router-dom'

import { cardsInfoList } from '../helpers/cardsInfoList'

const stylesTitle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '30px',
  padding: '20px',
}

const InfoCardPage = () => {
  const { id } = useParams()
  const card = cardsInfoList[id]
  console.log(card, 'card')

  return (
    <div>
      <Link to='/'>
        <button style={{ margin: '100px', width: '96px', height: '24px' }}>
          Back
        </button>
      </Link>
      <h2 style={stylesTitle}>{card.title}</h2>
    </div>
  )
}

export default InfoCardPage
