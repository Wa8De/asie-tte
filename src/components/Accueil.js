import React, { useState } from 'react'
import '../styles/Accueil.css'
import { Card, CardGroup, Carousel, Col, Collapse, Container, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import accPc from '../pictures/accueilPc.png'
import inside from '../pictures/insideRestau1.png'
import delivery from '../pictures/delivery1.png'
import chef1 from '../pictures/chef1.jpg'
import plat1 from '../pictures/asiettePlat1.jpg'
import plat2 from '../pictures/asiettePlat2.jpg'
import chef2 from '../pictures/chef2.jpg'
import plat3 from '../pictures/asiettePlat3.jpg'
import accTel from '../pictures/accueilTel.png'


export default function Accueil() {

  const infos = [
    {
      image: inside,
      title: 'Comfort',
      text: "Asie'tte vous propose une expérience culinaire unique en vous offrant une variété de plats traditionnels asiatiques savoureux. Nous sommes heureux de vous accueillir dans une ambiance conviviale et chaleureuse pour vous offrir un moment de détente et de plaisir en famille, entre amis ou en couple.",
      link: '/galerie',
      btnText: 'Découvrez notre galerie'
    },
    {
      image: chef1,
      title: 'Food With Soul',
      text: "Notre restaurant est doté d'une équipe de chefs talentueux et passionnés qui maîtrisent l'art culinaire asiatique. Avec leur expérience et leur savoir-faire unique, ils préparent des plats savoureux à base d'ingrédients frais et de qualité pour vous offrir une expérience culinaire inoubliable .",
      link: '/menu',
      btnText: 'Découvrez notre menu'
    },
    {
      image: delivery,
      title: 'Free Delivery',
      text: "Notre service de livraison vous permet de savourer nos plats délicieux depuis le confort de votre domicile ou de votre bureau. Nous vous garantissons une livraison rapide et fiable pour que vous puissiez profiter de nos saveurs asiatiques fraîches et authentiques où que vous soyez.",
      link: '/menu',
      btnText: 'Commandez maintenant'
    },

  ]
  const plats = [plat1, plat2, chef2, plat3]

  const avis = [{
    text: "J'ai eu la chance de dîner à ASIE’TTE la semaine dernière et j'ai été vraiment impressionné par l'expérience. Le menu propose une large sélection de plats asiatiques authentiques, chacun avec des saveurs uniques et délicieuses.",
  },
  {
    text: "Le service était excellent, avec un personnel attentif et accueillant. L'atmosphère était calme et agréable, avec une décoration soignée qui ajoutait une touche de sophistication. Je recommande vivement ce restaurant à tous ceux qui cherchent une expérience culinaire asiatique de qualité"
  },
  {
    text: "Un lieu très accueillant, excellente cuisine asiatique, raffinée et un personnel très serviable. L'ambiance est calme avec un jolie musique zen propice à la détente. Une excellent adresse à recommander sans modération ! Très bon rapport qualité-prix 👍🙆",
  },
  {
    text: "J'ai récemment visité ce restaurant asiatique et je suis resté impressionné par l'expérience culinaire incroyable. Les plats étaient savoureux et bien préparés, avec des ingrédients frais et de haute qualité. Le personnel était chaleureux et serviable, rendant notre visite encore plus agréable.",
  }, {
    text: "Une expérience culinaire à chaque fois ! Tout est délicieux, parfait et unique ! Des saveurs authentiques qui vous feront redécouvrir le « vrai » goût des sushis ! 🍣 Très bon service, produits succulents et ambiance très agréable. C'est un plaisir gustatif que je recommande sans hésitations.",
  }
  ]
  const [openH, setOpenH] = useState(false);
  const [openA, setOpenA] = useState(false);
  const [openT, setOpenT] = useState(false);

  return (<div className='wrapper'>

    {/* image avec bouton reserver */}
    <Container className='car'>
      <picture>
        <source srcset={accPc} media="(min-width: 575px)" />
        <source srcset={accTel} />
        <Image src={accPc} width={'100%'} height={'auto'} className='imageAcceuil' />

      </picture>
      <Link to='/reservation'><button className='reserver'>Réserver</button></Link>
    </Container>

    <br />

    {/* images : comfort chef livraison */}
    <Container>
      <CardGroup>
        {infos.map((card, index) => {
          return <Card bg="transparent" text='white' style={{ minWidth: '150px', width: '20rem', marginLeft: 'auto', marginRight: 'auto' }} border='secondary' key={index} className='cards'>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title><h5>{card.title}</h5></Card.Title>
              <Card.Text>
                {card.text}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <LinkContainer to={card.link}>
                <button className='cardBtn'>{card.btnText}</button>
              </LinkContainer>
            </Card.Footer>
          </Card>
        })}
      </CardGroup>
    </Container>

    <br />

    {/* horaire adresse tel */}
    <Container>
      <div className='container'>
        <button
          onClick={() => setOpenH(!openH)}
          aria-controls="example-collapse-text"
          aria-expanded={openH}
          className='animatedBtn'
        >
          Horaire
        </button>
        <div style={{ minHeight: '150px' }} className='d-flex justify-content-center'>
          <Collapse in={openH} dimension="width">
            <div id="example-collapse-text">
              <Card body style={{ width: '300px'}}>
                Ouvert du Mardi au Dimanche <br />
                ⏰ 11h30 à 23h30
              </Card>
            </div>
          </Collapse>
        </div>
      </div>
      <div className='container'>
        <button
          onClick={() => setOpenA(!openA)}
          aria-controls="example-collapse-text"
          aria-expanded={openA}
          className='animatedBtn'
        >
          Adresse
        </button>
        <div style={{ minHeight: '150px' }} className='d-flex justify-content-center'>
          <Collapse in={openA} dimension="width">
            <div id="example-collapse-text">
              <Card body style={{ width: '300px' }}>
                <a href='https://goo.gl/maps/LyBodzxpQqcxj7kM9' className='adresse' target='_blank' rel="noreferrer">🏠 12 Bd Mohamed Abdou, Casablanca 20000, Morocco</a>
              </Card>
            </div>
          </Collapse>
        </div>
      </div>
      <div className='container'>
        <button
          onClick={() => setOpenT(!openT)}
          aria-controls="example-collapse-text"
          aria-expanded={openT}
          className='animatedBtn'
        >
          Contact
        </button>
        <div style={{ minHeight: '150px' }} className='d-flex justify-content-center'>
          <Collapse in={openT} dimension="width">
            <div id="example-collapse-text">
              <Card body style={{ width: '300px' }}>
                <a href="tel:+212606815815" title='cliquer pour appler' className='contact'>
                  ☎️ 06.06.815.815
                </a><br />
                <a href="tel:+212606849849" title='cliquer pour appeler' className='contact'>
                  ☎️ 06.06.849.849
                </a>
              </Card>
            </div>
          </Collapse>
        </div>
      </div>
    </Container>

    {/* 4 images des plats */}
    <Container>
      <Row xs={1} md={2} className="g-4">
        {plats.map((p, i) => {
          return <Col key={i}>
            <Card border='secondary' >
              <Card.Img variant="top" src={p} />
            </Card>
          </Col>
        })}
      </Row>
    </Container>

    <br />

    {/* avis des clients */}
    <Container>
      <h2 style={{ textAlign: 'center' }}>Nos clients disent</h2>
      <Carousel variant='dark' indicators={false}>
        {avis.map((a, i) => {
          return <Carousel.Item key={i}>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="review bg-white p-5 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#c5a069" class="bi bi-quote" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                  <p className="mb-0 text-black">
                    {a.text}
                  </p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#c5a069" class="bi bi-quote" viewBox="0 0 16 16">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                </div>
              </div>
            </div>
          </Carousel.Item>
        })}

      </Carousel>
    </Container>
  </div>
  )
}
