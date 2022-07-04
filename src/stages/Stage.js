import React from 'react'

const Stage = ({ title, src, stageNumber }) => {
  return (
    <div className='flex justify-self-center flex-col gap-4 sm:gap-8 xl:gap-11 w-full max-w-[440px]'>
      <div className='relative h-24 xs:h-36'>
        <div className='absolute left-0 bottom-0 w-24 h-24 xs:w-36 xs:h-36 uppercase tracking-[4px] xs:tracking-[8px] rotate-[-90deg] flex lg:mb-2 flex-row justify-end'>
          <span className='text-sm xs:text-lg uppercase text-main-brown'>Этап №{stageNumber}</span>
        </div>
        <div className='ml-12 w-[calc(100%-48px)]'>
          <span className='text-lg xs:text-2xl lg:text-[40px] text-white uppercase font-extrabold break-words'>{title}</span>
        </div>
      </div>
      <img src={src} className='w-full' />
    </div>
  )
}

export default Stage