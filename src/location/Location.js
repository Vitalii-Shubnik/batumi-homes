import React from 'react'
import checkpoint from '../images/location.png'
const Location = () => {
  return (
    <>
      <div className='xs:px-12 px-2 flex flex-col sm:flex-row justify-between items-center pt-12 pb-6 gap-4 xs:gap-2'>
        <div className='relative flex items-center text-end  uppercase text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-main-brown font-light'>
          <div className='absolute hidden md:block h-[1px] w-20 bg-main-brown top-0' />
          <div className='absolute h-[1px] w-20 bg-main-brown bottom-0 xs:right-0' />
          Наше Местоположение
        </div>
        <div className='flex flex-row items-center lg:gap-6 text-center'>
          <div className='h-full pr-2 hidden md:flex items-center '>
            <img src={checkpoint} className=' h-3/5 lg:h-[90%]' />
          </div>
          <div className='flex flex-col items-center xl:pl-10'>
            <div className='font-normal text-lg lg:text-2xl text-main-brown uppercase opacity-50 tracking-[7px]'>
              Current location
            </div>
            <div className='text-white text-2xl lg:text-[40px]  uppercase font-light opacity-90 tracking-[0.3px]'>
              Батуми <span className='text-main-brown'>|</span> Грузия
            </div>
          </div>
        </div>
      </div>
      <a
        href='https://www.google.com/maps/place/%D0%91%D0%B0%D1%82%D1%83%D0%BC%D0%B8,+%D0%93%D1%80%D1%83%D0%B7%D0%B8%D1%8F/@41.6026183,41.5590672,12z/data=!3m1!4b1!4m5!3m4!1s0x406786304ea2d221:0x7a3053a9e12ea967!8m2!3d41.6167547!4d41.6367455'
        className='text-white bg-bg2 bg-no-repeat bg-contain w-full h-0 pt-[52.57%]'>
      </a>
    </>
  )
}

export default Location