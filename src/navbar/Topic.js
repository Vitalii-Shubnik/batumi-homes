import React from 'react'
import Stick from './Stick'
import { Link } from 'react-scroll'

const Topic = ({ onClick, text, linkTo }) => {
  return (
    <Link onClick={onClick} to={linkTo} className='topic hover:scale-105 duration-200' smooth={true} duration={500}>
      {text}
      <Stick />
    </Link >
  )
}

export default Topic