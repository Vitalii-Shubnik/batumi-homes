import React from 'react'
import BottomButton from './BottomButton'

const BottomButtons = () => {
  return (
    <div className='text-white tracking-wide text font-light hidden xl:flex flex-row gap-10 mr-2'>
      <BottomButton title='Местоположение' linkTo='location' />
      <BottomButton title='Предложения о продаже' linkTo='forsell' />
      <BottomButton title='Отзывы о нашей работе' linkTo='reviews' />
      <BottomButton title='Связаться с нами' linkTo='contacts' />
    </div>
  )
}

export default BottomButtons