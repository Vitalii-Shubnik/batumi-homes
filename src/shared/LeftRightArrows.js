import React from 'react'
import leftArrow from '../images/arrow_left.png'
import rightArrow from '../images/arrow_right.png'

const LeftRightArrows = ({ prev, next }) => {
  return (
    <div className='flex flex-row gap-6'>
      <img src={leftArrow} onClick={prev} className='cursor-pointer hover:scale-110 duration-300' />
      <img src={rightArrow} onClick={next} className='cursor-pointer hover:scale-110 duration-300' />
    </div>
  )
}

export default LeftRightArrows