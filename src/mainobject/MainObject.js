import React, { useEffect, useState } from 'react'

import SplitImage from './SplitImage'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'

const MainObject = () => {
  const [images, setImages] = useState([])
  const [current, setCurrent] = useState(0)

  const leadingObjectRef = collection(db, "leadingproj")

  useEffect(() => {
    const getleadingObject = async () => {
      const data = await getDocs(leadingObjectRef)
      setImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setCurrent(0)
    }
    getleadingObject()
  }, [])


  useEffect(() => {

    const interval = setInterval(() => {
      if (images && images.length) {
        setCurrent((current + 1) % images.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [current, images])

  return (
    <>
      <div className='xs:ml-12 ml-2 mt-5 md:mt-12 mb-5 :md:mb-16 w-fit relative uppercase text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-main-brown font-light '>
        <div className='absolute hidden md:block h-[1px] w-20 bg-main-brown top-0' />
        <div className='absolute h-[1px] w-20 bg-main-brown bottom-0 xs:right-0' />
        <h1>Наш ведущий проект</h1>
      </div>
      <div className='relative h-[90vh] w-[calc(100%-96px)] mx-auto mt-[-64px] md:mt-20 md:mb-40'>
        {images && images.length && images.map((el, index) => {
          return (
            <SplitImage key={index} current={index === current} photos={el.photos} />
          )
        })}
      </div>
    </>

  )
}

export default MainObject