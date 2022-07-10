import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'
import ForSell from './ForSell'

const ForSells = () => {

  const [currentForSell, setCurrentForSell] = useState(0)
  const [forSells, setForSells] = useState([])
  const [changing, setChanging] = useState(false)
  const forSellsRef = collection(db, "forsell")

  const increaseCurrentForSell = () => {
    setChanging(true)
    setCurrentForSell(currentForSell + 1)
  }
  const decreaseCurrentForSell = () => {
    setChanging(true)
    setCurrentForSell(currentForSell - 1)
  }
  useEffect(() => {
    const getForSells = async () => {
      const data = await getDocs(forSellsRef)
      setForSells(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getForSells()
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      changing && setChanging(false)
    }, 300);
    return () => clearInterval(interval)
  }, [currentForSell])


  return (
    <>
      <div className='xs:ml-12 ml-2 mt-5 md:mt-12 mb-5 :md:mb-16 w-fit relative uppercase text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-main-brown font-light '>
        <div className='absolute hidden md:block h-[1px] w-20 bg-main-brown top-0' />
        <div className='absolute h-[1px] w-20 bg-main-brown bottom-0 xs:right-0' />
        <h1>TownHouse в Polo Villas</h1>
      </div>
      {!!forSells[Math.abs(currentForSell) % forSells.length] &&
        <ForSell changing={changing} forSell={forSells[Math.abs(currentForSell) % forSells.length]} next={increaseCurrentForSell} prev={decreaseCurrentForSell} />}
    </>
  )
}

export default ForSells