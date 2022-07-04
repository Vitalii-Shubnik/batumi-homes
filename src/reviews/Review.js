import React from 'react'
import starFilled from '../images/StarFilled.png'
import starHollow from '../images/StarHollow.png'
import LeftRightArrows from '../shared/LeftRightArrows'

const rating = {
  1: "Отвратительно",
  2: "Плохо",
  3: "Нормально",
  4: "Хорошо",
  5: "Отлично"
}

const stars = [0, 1, 2, 3, 4]

const Review = ({ review, next, prev }) => {
  return (
    <>
      <div className='absolute left-0 bottom-0 w-48 h-48 uppercase opacity-50 tracking-[8px] rotate-[-90deg] flex flex-row items-start justify-center'>
        {review.location}
      </div>
      <div className='relative ml-10 flex flex-col lg:flex-row gap-2 lg:items-center justify-between lg:justify-start w-full items-start '>
        <div className='font-extrabold text-lg md:text-4xl leading-5 md:leading-9 flex flex-col uppercase pr-4 '>
          <span>{review.name}</span>
          <span>{review.surname}</span>
        </div>
        <div className='flex-1 ml-2 text-[#979797] mb-4'>
          {review.comment}
        </div>
        <div className='flex flex-col sm:flex-row self-center lg:flex-col gap-2 md:gap-6'>
          <div className='flex flex-row items-center justify-start'>
            <span className='uppercase opacity-50 tracking-[8px]'>Рейтинг</span>
            <div className='h-[1px] w-20 bg-white opacity-50' />
          </div>
          <div className='flex flex-col xs:flex-row items-center justify-between xs:gap-3 md:gap-6'>
            <span className='uppercase text-lg md:text-4xl leading-5 md:leading-9 font-extrabold shadow-inner'>{rating[review.rating]}</span>
            <div className='flex flex-row justify-between'>
              {stars.map((el, index) => {
                return (
                  <div key={index}>
                    {review.rating >= index + 1 ? <img src={starFilled} className='mx-[-8px]' /> : <img src={starHollow} className='mx-[-8px]' />}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className='absolute right-0 top-0'>
          <LeftRightArrows prev={prev} next={next} />
        </div>
      </div>
    </>
  )
}

export default Review