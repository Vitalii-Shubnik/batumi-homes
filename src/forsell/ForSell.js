import React from 'react'
import LeftRightArrows from '../shared/LeftRightArrows'

const ForSell = ({ next, prev, forSell, changing }) => {
  return (
    <div className='flex flex-col xl:flex-row gap-16 xl:gap-0 xl:justify-between w-[calc(100%-48px)] self-center xl:self-end mb-32 '>
      <div className='relative  h-fit xl:w-3/5 min-w-[256px] max-w-5xl w-full self-center'>
        <div className='absolute h-[1px] w-28 bg-main-brown top-0' />
        <div className='absolute h-28 w-[1px] bg-main-brown top-0' />
        <div className='absolute h-[1px] w-28 bg-main-brown bottom-0 right-0' />
        <div className='absolute h-28 w-[1px] bg-main-brown bottom-0 right-0' />
        <div className='m-5 h-[80vw] md:h-[640px]'>
          <img className={`w-full min-h-[80vw] md:min-h-[640px] h-full object-cover duration-300 ease-out ${changing ? 'opacity-0' : 'opacity-100'}`} src={forSell.src} />
        </div>
      </div>
      <div className='w-full max-w-[60%] self-center 2xl:justify-self-end 2xl:self-start xl:w-[calc(40%-64px)] flex flex-col items-center xl:items-start justify-start gap-4 xl:gap-8 mt-5 mr-5 xl:mr-12'>
        <div className='flex flex-row relative'>
          <span className='text-white uppercase font-light text-md md:text-xl lg:text-2xl xl:text-4xl my-2 text-justify'>{forSell.name}</span>
          <div className='absolute h-[1px] w-20 bg-main-brown left-0 right-0 mx-auto' />
        </div>
        <LeftRightArrows next={next} prev={prev} />
        <div className='flex flex-col items-center sm:items-start gap-6 xl:gap-10'>
          <span className='text-white uppercase font-light text-md md:text-xl lg:text-2xl xl:text-4xl text-center'>Описание Объекта </span>
          <span className='text-white uppercase font-light text-sm md:text-lg lg:text-xl xl:text-2xl sm:text-justify'>
            {forSell.description}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ForSell