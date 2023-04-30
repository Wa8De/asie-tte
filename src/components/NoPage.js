import React from 'react'
import { Container } from 'react-bootstrap'
import error from '../pictures/404.png'

export default function NoPage() {
  return (<Container className='error'>
    <img src={error} alt='' width={'45%'} className='mt-2'/>
    <p className='my-3'>
      Oops ! Il semblerait que cette page ait pris une pause pour déguster un délicieux sushi. Retournez à la page d'accueil et essayez un sushi vous aussi !
    </p>
    <button className='cardBtn my-3'>Retourner à la page d'accueil</button>
  </Container>
  )
}
