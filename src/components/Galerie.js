import '../styles/Galerie.css'
import { Container } from 'react-bootstrap';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import tab1 from '../pictures/asietteTable1.jpg'
import plat2 from '../pictures/asiettePlat2.jpg'
import chef2 from '../pictures/chef2.jpg'
import plat3 from '../pictures/asiettePlat3.jpg'
import accTel from '../pictures/accueilTel.png'
import susi1 from '../pictures/sushi1.jpg'
import face from '../pictures/interfaceRestau.png'
import plat4 from '../pictures/asiettePlat4.png'
import atm from '../pictures/atmosphere.png'
import deliv from '../pictures/delivery.png'
import deliv2 from '../pictures/delivery2.png'
import inside from '../pictures/insideRestau.png'
import inside2 from '../pictures/insideRestau2.png'
import inside1 from '../pictures/insideRestau1.png'
import tab2 from '../pictures/asietteTable2.jpg'
import plat5 from '../pictures/asiettePlat5.jpg'
import sushi4 from '../pictures/sushi4.jpg'
import sushi2 from '../pictures/sushi2.jpg'
import inside3 from '../pictures/insideRestau3.PNG'
import chef3 from '../pictures/chef3.jpg'
import jus from '../pictures/jus.png'
import plat6 from '../pictures/asiettePlat6.png'
import reception from '../pictures/reception.png'
import deliv3 from '../pictures/delivery3.png'
import sushi3 from '../pictures/sushi3.jpg'
import salad from '../pictures/salad.jpg'



export default function Galerie() {
  const images = [inside, face, tab1, plat2, sushi2, deliv3, inside2, deliv, chef2, plat5, plat3, inside1, deliv2, plat4, accTel, plat6, chef3, sushi4, tab2, reception, inside3, susi1, atm, jus, sushi3, salad]

  return (
    <Container>

      <h3 className='text-center'>Notre Galerie</h3><br/>
      
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1600: 4 }}>
        <Masonry className='galerie'>
          {
            images.map((src, i) => {
              return <img className='galImage' src={src} alt='' key={i} />
            })
          }
        </Masonry>
      </ResponsiveMasonry>

    </Container>

  );
};

