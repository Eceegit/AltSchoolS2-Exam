import React from 'react'
import Navigation from './Navigation'


let url = 'https://whc.unesco.org/uploads/thumbs/activity_725-1200-630-20220308132126.jpg'
const Home = () => {
  return (
    <div className='home-section'>
            <Navigation />
        <div>
            <img src={url} className='banner-img' alt='banner' />
        </div>
    </div>
  )
}

export default Home