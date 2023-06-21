import React from 'react'
import { Container } from 'react-bootstrap'
import Card from './Card'
import Data from "./Data"
import "../styles/Menu.css"
export default function Menu() {
  return (
    <Container>
      <h3>Menu</h3>
      <div className='container menu my-3 parent'>
      {Data.map((elem)=>(
         <>
         <Card title={elem.title} photo={elem.photo} description={elem.description} pricing={elem.pricing}/>
         </>
      ))}
      </div>
    </Container>
  )
}
