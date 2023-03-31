import React from 'react'
import './Snackbar.css'


const Snackbar = (props) => {
  return (
    <div className='snackbar'>
        {/* <div className='symbol'></div> */}
        <div className='message'>{props.message}</div>
    </div>
  )
}

export default Snackbar