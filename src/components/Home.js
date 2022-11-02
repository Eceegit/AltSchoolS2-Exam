import React from 'react'
import Navigation from './Navigation'


const Home = () => {
  return (
    <main className='home-section'>
            <Navigation />
        <div>
            <img src={require('../image/nature3.jpg')} className='banner-img' alt='banner' />
        </div>
    </main>
  )
}

export default Home