import React from 'react'

const Popup = (props) => {
  return (props.trigger) ? (
    <div className='popup-container'>
        <div className='popup-inner'>

            {props.children}
        </div>
    </div>
  ) : " ";
}

export default Popup