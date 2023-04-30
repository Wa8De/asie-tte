import React from 'react'
import '../styles/Reservation.css'

export default function Reservation() {
  return (
    <div className='container wrapper'>
      <h3>Chers clients,</h3>
      <p>Merci de mentionner ces informations lors de la réservation :</p>
      <ul>
        <li>votre nom</li>
        <li>la date de réservation</li>
        <li>l'heure de réservation</li>
        <li>nombre de personnes</li>
      </ul>

      <br />

      <div className='container d-flex justify-content-center'>
        <a href="tel:+212606815815" className='call' title='cliquer pour appler'>
          ☎️ 06.06.815.815
        </a>
        <a href="tel:+212606849849" className='call' title='cliquer pour appeler' style={{ 'marginLeft': '10px' }}>
          ☎️ 06.06.849.849
        </a>
      </div>
      <br/>
      <br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13295.331678229895!2d-7.6272352!3d33.5836871!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3c7b1e4502b%3A0x4e7cef999114b0c!2zQXNpZeKAmXR0ZQ!5e0!3m2!1sfr!2sma!4v1681153185687!5m2!1sfr!2sma" width="100%" height="450vh" style={{'border':0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='localisation'></iframe>
    </div>
  )
}
