import React from 'react'
import './Company.css'
import gallery_1 from '../../assets/images/gallery-1.JPG'
import gallery_2 from '../../assets/images/gallery-2.jpg'
import gallery_3 from '../../assets/images/gallery-3.JPG'
import gallery_4 from '../../assets/images/gallery-4.jpg'
import white_arrow from '../../assets/images/white-arrow.png'

const Company = () => {
  return (
    <div className='company'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn color-btn'>See more <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Company;
