import React from 'react'
import Navigation from './Navigation'

const Error404 = () => {
  return (
    <main>
      <Navigation />
      <div  className='error404'>
        <h1>Oops! No page found!</h1>
        <p>Kindly go to a valid page</p>
      </div>

    </main>
  )
}

export default Error404