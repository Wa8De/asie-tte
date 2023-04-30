import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import menu1 from '../pictures/menu/page1.png'
import menu2 from '../pictures/menu/page2.jpg'
import menu3 from '../pictures/menu/page3.png'
import menu4 from '../pictures/menu/page4.png'
import menu5 from '../pictures/menu/page5.png'
import menu6 from '../pictures/menu/page6.jpg'
import menu7 from '../pictures/menu/page7.png'
import menu8 from '../pictures/menu/page8.png'
import menu9 from '../pictures/menu/page9.png'
import menu10 from '../pictures/menu/page10.png'
import menu11 from '../pictures/menu/page11.png'
import menu12 from '../pictures/menu/page12.png'
import menu13 from '../pictures/menu/page13.png'

export default function Menu() {
  const menu = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10, menu11, menu12, menu13]
  return (
    <Container>
      <h3>Menu</h3>
      <div className='container menu my-3'>
        <Carousel indicators={false} fade >
          {menu.map((src, i) => {
            return <Carousel.Item key={i} interval={3000}>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <img src={src} alt='' width={'100%'} />
                </div>
              </div>
            </Carousel.Item>
          })}

        </Carousel>
      </div>
    </Container>
  )
}
