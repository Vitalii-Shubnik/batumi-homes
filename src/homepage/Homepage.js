import React from 'react'
import BottomButtons from './BottomButtons'
import logo from '../images/Logo.png'

const Homepage = () => {
  return (
    <>
      <img src={logo} className='block xl:hidden w-[170px] h-[170px] m-auto bottom-0 top-0 left-0 right-0' />
      <div className='absolute bottom-12 xl:left-[10%] left-32 flex flex-row items-end w-[calc(100%-8rem)] xl:w-[90%] justify-between'>
        <img className='xl:block hidden w-[170px] h-[170px]' src={logo} />
        <BottomButtons />
      </div>
    </>
  )
}

export default Homepage