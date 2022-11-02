import React from 'react'
import Navigation from './Navigation'

let url = 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/mountain_climber.jpg?crop=0%2C235%2C4000%2C2200&wid=4000&hei=2200&scl=1.0'
const About = () => {
  return (
    <main>
      <Navigation />
      <div className='about-section'>
          <div className='about-banner'>
            <h1 className='about-header'>About Us</h1>
            <h1 className='about-header second'>Who We Are</h1>
            <img src={url} alt='about-img' className='about-img' />
          </div>
        <div className='about-content'>
          <h5>The Nature Conservancy is a global environmental 
          nonprofit working to create a world where people and nature can thrive.</h5>
          <p>Founded in the Nigeria through grassroots action in 1981, The AfriNat has grown to become one of the most effective and wide-reaching environmental organizations in the world. Thanks to more than a million members and the dedicated efforts of our diverse staff and over 400 scientists, we impact conservation in 76 countries and territories:
           37 by direct conservation impact and 39 through partners.</p>
        
        </div>
    </div>

    </main>

  )
}

export default About