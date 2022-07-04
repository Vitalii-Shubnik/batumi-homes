import React from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_meec4l4', 'template_9v5m34r', e.target, 'BYt_bNvz7J2K03444')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.error(error.text)
      })
    e.target.reset()
  }
  return (
    <div className='px-[15%] pt-14 lg:pt-40 flex flex-col pb-14 lg:pb-40 justify-center items-center'>
      <div className='uppercase text-main-brown w-fit font-light tracking-[6px] text-2xl sm:text-4xl xl:text-6xl'>
        Обратная связь
      </div>
      <form onSubmit={sendEmail} className='flex text-main-brown flex-col gap-4 max-w-2xl w-full mt-14 md:mt-28 lg:mt-32'>
        <input className='hidden' defaultValue='Batumi' readOnly="readonly" name='subject' />
        <input className='w-full h-8 sm:h-12 rounded-[35px] pl-6 placeholder-opacity-70 placeholder-main-brown' placeholder='Name' name='name' />
        <input className='w-full h-8 sm:h-12 rounded-[35px] pl-6 placeholder-opacity-70 placeholder-main-brown' type="email" placeholder='Email' name='email' />
        <textarea rows="10" className='w-full rounded-[35px] py-3 pl-6 placeholder-opacity-70 placeholder-main-brown' placeholder='Message' name='message' />
        <button type='submit' className='bg-main-brown self-end h-10 w-32 text-white hover:opacity-90 rounded-lg'>Submit</button>
      </form>
    </div>

  )
}

export default Contact