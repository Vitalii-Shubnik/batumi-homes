import React from 'react'
import Stage from './Stage'
import stage1 from '../images/stages/stage1.png'
import stage2 from '../images/stages/stage2.png'
import stage3 from '../images/stages/stage3.png'
import stage4 from '../images/stages/stage4.png'

const Stages = () => {
  return (
    <>
      <div className='xs:ml-12 ml-2 mt-5 md:mt-12 mb-5 :md:mb-16 w-fit relative uppercase text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-main-brown font-light '>
        <div className='absolute hidden md:block h-[1px] w-20 bg-main-brown bottom-0' />
        <div className='absolute h-[1px] w-20 bg-main-brown top-0 xs:right-0' />
        <h1>Этапы строительства</h1>
      </div>
      <div className='self-center mb-40 mt-20 sm:w-4/5 w-1/2 gap-16 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4'>
        <Stage src={stage1} title='Фундамент' stageNumber={1} />
        <Stage src={stage2} title='Каркас' stageNumber={2} />
        <Stage src={stage3} title='Внутренние работы' stageNumber={3} />
        <Stage src={stage4} title='Фасад' stageNumber={4} />

      </div>
    </>
  )
}

export default Stages