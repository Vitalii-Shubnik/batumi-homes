import React, { useEffect, useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Topic from './Topic'

const Navbar = () => {
  const [closeToggle, setCloseToggle] = useState(false)

  const [scrollDir, setScrollDir] = useState(true);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? false : true);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <>
      <div className={`navbar text-white z-10 text-center gap-4 fixed hidden md:flex flex-row items-center font-thin md:text-lg lg:text-xl xl:text-3xl justify-between tracking-[3px] pt-5 px-9 w-full ${scrollDir ? 'top-0' : 'top-[-100px]'}`}>
        <Topic linkTo='forsell' text={'TownHouse в Polo Villas'} />
        <Topic linkTo='contacts' text={'Связаться с нами'} />
        <Topic linkTo='reviews' text={'Портфолио'} />
        <Topic linkTo='homepage' text={'О нас'} />
      </div>
      <div className={`navbar text-white z-10 text-center gap-4 fixed md:hidden flex flex-row items-center font-thin md:text-lg lg:text-xl xl:text-3xl justify-between tracking-[3px] w-full ${scrollDir ? 'top-0' : 'top-[-150px]'}`}>
        <div className='md:hidden p-8 sm:p-12'>
          <HiMenu size={32} onClick={setCloseToggle} />
        </div>
        {/* {closeToggle && ( */}
        <div className={`fixed w-full top-0 bg-black h-screen owerflow-y-auto shadow-md z-10 animate-slide-in flex flex-col duration-500 ${closeToggle ? 'opacity-100 ml-0' : 'opacity-0 ml-[-100%]'}`}>
          <div className='absolute w-full flex justify-end items-center p-2'>
            <AiOutlineCloseCircle fontSize={30} className='cursor-pointer' onClick={() => setCloseToggle(false)} />
          </div>
          <div className='flex flex-col gap-[16vh] self-center my-auto justify-self-center'>
            <Topic onClick={() => setCloseToggle(false)} linkTo='forsell' text={'Предложения к продаже'} />
            <Topic onClick={() => setCloseToggle(false)} linkTo='contacts' text={'Связаться с нами'} />
            <Topic onClick={() => setCloseToggle(false)} linkTo='reviews' text={'Портфолио'} />
            <Topic onClick={() => setCloseToggle(false)} linkTo='homepage' text={'О нас'} />
          </div>
        </div>
        {/* )} */}
      </div>
    </>
  )
}

export default Navbar