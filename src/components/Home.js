import React from 'react'
import Navigation from './Navigation'


const Home = () => {
  return (
    <main>
            <Navigation />
        <div className='home-section'>
            <div className='banner-text'>
              <h1>Together, We can unite The People with Nature!</h1>
              <p>Join as a Nature lover today to help save endangered lands, waters and
                wild species and receive our picnic blanket thank-you gift seen on TV.</p>
              <button>Join Us</button>
            </div>
            <img src={require('../image/nature3.jpg')} className='banner-img' alt='banner' />
        </div>
    </main>
  )
}

export default Home