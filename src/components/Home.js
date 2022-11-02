import React from 'react'
import Navigation from './Navigation'


const Home = () => {
  return (
    <div className='home-section'>
            <Navigation />
        <div>
            <img src={require('../image/nature3.jpg')} className='banner-img' alt='banner' />
        </div>
    </div>
  )
}

export default Home