import React, { useEffect, useState } from 'react'
import { reviewImages } from '../images/reviews/reviewsImages'
import { db } from '../firebase-config'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import Review from './Review'
import starFilled from '../images/StarFilled1.png'
import starHollow from '../images/StarHollow1.png'

const stars = [1, 2, 3, 4, 5]
const Reviews = () => {
  const [rating, setRating] = useState(4)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [location, setLocation] = useState('')
  const [message, setMessage] = useState('')

  const [currentReview, setCurrentReview] = useState(0)
  const [reviews, setReviews] = useState([])

  const [changing, setChanging] = useState(false)

  const reviewsRef = collection(db, "rewiewers")

  const increaseCurrentReview = () => {
    setChanging(true)
    setTimeout(() => {
      setCurrentReview(currentReview + 1)
    }, 150);
  }

  const decreaseCurrentReview = () => {
    setChanging(true)
    setTimeout(() => {
      setCurrentReview(currentReview - 1)
    }, 150);
  }

  useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(reviewsRef)
      setReviews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })).filter(el => el.checked))
    }
    getReviews()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setChanging(false)
    }, 300);

    return () => clearInterval(interval)
  }, [currentReview])


  const createReview = async (e) => {
    e.preventDefault()
    if (name && surname && location && rating && message) {
      await addDoc(reviewsRef, {
        name: name,
        surname: surname,
        location: location,
        rating: rating,
        comment: message,
        checked: false
      })
      e.target.reset()
    }
    else
      alert('Заполните все поля!')
  }

  return (
    <div className='flex flex-col gap-8 md:gap-14 text-white w-[90%] mx-auto pt-10'>
      <div className='flex flex-row justify-between gap-4'>
        <div className='relative flex items-center h-fit self-center sm:text-end uppercase text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-main-brown font-light'>
          <div className='absolute hidden md:block h-[1px] w-20 bg-main-brown top-0' />
          <div className='absolute h-[1px] w-20 bg-main-brown bottom-0 md:right-0' />
          Отзывы клиентов
        </div>
        <div className='flex flex-row gap-6 self-end'>
          <div className='h-[1px] hidden sm:block w-20 md:w-36 bg-main-brown mt-3' />
          <div className='flex flex-col'>
            <div className='font-normal text-lg lg:text-2xl text-main-brown uppercase tracking-[7px]'>
              Локация
            </div>
            <div className='text-white text-2xl lg:text-[40px]  uppercase font-light opacity-90 tracking-[0.3px]'>
              Батуми <span className='text-main-brown'>|</span> Грузия
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between'>
        <img src={reviewImages[(Math.abs(currentReview) * 3) % reviewImages.length]} className={`object-cover h-[37vw] w-[31%] duration-300 opacity-0 ${!changing && 'opacity-100'}	`} />
        <img src={reviewImages[(Math.abs(currentReview) * 3 + 1) % reviewImages.length]} className={`object-cover h-[37vw] w-[31%] duration-300 opacity-0 ${!changing && 'opacity-100'}`} />
        <img src={reviewImages[(Math.abs(currentReview) * 3 + 2) % reviewImages.length]} className={`object-cover h-[37vw] w-[31%] duration-300 opacity-0 ${!changing && 'opacity-100'}`} />
      </div>
      {reviews[Math.abs(currentReview) % reviews.length] && <div className='relative w-full min-h-[192px] flex flex-row items-center gap-2'>
        <Review changing={changing} review={reviews[Math.abs(currentReview) % reviews.length]} next={increaseCurrentReview} prev={decreaseCurrentReview} />
      </div>}
      <div className='flex flex-col self-center items-center mb-48 max-w-[1024px]' >
        <div className=' pb-4 text-2xl lg:text-[40px] uppercase'>оставить отзыв</div>
        <form onSubmit={createReview} className='flex text-main-brown flex-col gap-4 w-full '>
          <div className='flex flex-col sm:flex-row justify-between gap-4'>
            <input className='w-full h-6 md:h-9 rounded-md pl-6 placeholder-opacity-70 placeholder-main-brown' placeholder='Name' name='name'
              onChange={(e) => { setName(e.target.value) }}
            />
            <input className='w-full h-6 md:h-9 rounded-md pl-6 placeholder-opacity-70 placeholder-main-brown' placeholder='Surname' name='surname'
              onChange={(e) => { setSurname(e.target.value) }}
            />
            <input className='w-full h-6 md:h-9 rounded-md pl-6 placeholder-opacity-70 placeholder-main-brown' placeholder='City' name='location'
              onChange={(e) => { setLocation(e.target.value) }}
            />
          </div>
          <input className='w-full h-6 md:h-9 rounded-md py-3 pl-6 placeholder-opacity-70 placeholder-main-brown' placeholder='Message' name='message'
            onChange={(e) => { setMessage(e.target.value) }}
          />
          <div className='flex flex-col gap-4 xs:gap-0 xs:flex-row justify-between'>
            <div className='flex flex-row gap-2 items-center mr-2'>
              {stars.map((el, index) => {
                return (
                  <div key={el.toString()}>
                    {rating >= index + 1 ?
                      <img src={starFilled} className='h-fit hover:scale-110 duration-200' onClick={() => setRating(index + 1)} />
                      :
                      <img src={starHollow} className='h-fit hover:scale-110 duration-200' onClick={() => setRating(index + 1)} />}
                  </div>
                )
              })}
            </div>
            <button type='submit' className='bg-main-brown self-end h-10 w-32 text-white hover:opacity-90 rounded-lg'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reviews