import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/images/next-icon.png'
import back_icon from '../../assets/images/back-icon.png'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn'/>
      <img src={back_icon} alt="" className='back-btn'/>
      <div className='slider'></div>
    </div>
  )
}

export default Testimonials
