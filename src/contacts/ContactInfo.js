import React from 'react'

const ContactInfo = ({ src, alt, href, text }) => {
  return (
    <>
      {href ? <>
        <a target='_blank' href={href}>
          <div className='flex flex-col xs:flex-row gap-4 sm:gap-[42px] items-center'>
            <img src={src} className='w-[45px] h-[45px] sm:w-[67px] sm:h-[67px] xl:w-[89px] xl:h-[89px]' alt={alt} />
            <span className='text-[#F2F2F2] font-medium text-sm sm:text-lg lg:text-2xl xl:text-[40px] uppercase'>
              {text}
            </span>
          </div>
        </a>
      </> : <>
        <div className='flex flex-col xs:flex-row gap-4 sm:gap-[42px] items-center cursor-pointer'>
          <img src={src} className='w-[45px] h-[45px] sm:w-[67px] sm:h-[67px] xl:w-[89px] xl:h-[89px]' alt={alt} />
          <span className='text-[#F2F2F2] font-medium text-sm sm:text-lg lg:text-2xl xl:text-[40px] uppercase'>
            {text}
          </span>
        </div>
      </>}
    </>
  )
}

export default ContactInfo