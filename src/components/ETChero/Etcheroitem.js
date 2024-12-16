import React from 'react'

const Etcheroitem = (props) => {
  return (
    <div className='etcitem'>
    <div className='left'>
        <h1>{props.heading}</h1>
        <p>{props.mesage} </p>
    </div>
    <div className='right'>
        <img src={props.img} alt=''/>
    </div>
      
    </div>
  )
}

export default Etcheroitem
