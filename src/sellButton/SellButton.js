import React from 'react'
import { Link } from 'react-scroll'

const SellButton = () => {
  return (
    <Link
      to='forsell'
      smooth={true}
      duration={500}
      className='fixed flex flex-col items-center justify-center z-10 cursor-pointer hover:scale-110 duration-100 ease-in bottom-6 rounded-lg bg-main-brown bg-opacity-70 opacity-90 right-8 lg:w-60 lg:h-28 w-48 h-20 text-sm lg:text-lg'
    >
      <div className='text-white mx-auto text-center'>TownHouse в Polo Villas</div>
      <div className='text-white mx-auto text-center'>ВСЕГО</div>
      <div className='text-white mx-auto text-center'><span className='font-bold'>663$</span> за кв.м.</div>

    </Link>
  )
}

export default SellButton