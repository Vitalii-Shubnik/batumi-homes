import React from 'react'
import { Link } from 'react-scroll'
import BottomButtonStick from './BottomButtonStick'

const BottomButton = ({title, linkTo}) => {
  return (
    <Link to={linkTo} className='topic flex flex-col gap-2.5' smooth={true} duration={500}>
      <BottomButtonStick/>
      {title}
    </Link>
  )
}

export default BottomButton