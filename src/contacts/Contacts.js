import React from 'react'
import phone from '../images/phone.png'
import instagram from '../images/instagram.png'
import mail from '../images/mail.png'
import ContactInfo from './ContactInfo'
import { Link } from 'react-scroll'
const Contacts = () => {
  return (
    <div className='my-auto px-2 ml-4 xs:ml-10 sm:ml-20 lg:ml-[168px] flex flex-col'>
      <div className='uppercase text-main-brown w-fit font-light tracking-[6px] text-2xl sm:text-4xl xl:text-6xl'>
        Связаться с нами
      </div>
      <div className='flex flex-col gap-7 sm:pl-[52px] mt-20 md:mt-28 lg:mt-32'>
        <ContactInfo src={phone} href={'tel:+995555971326'} alt={'phone'} text={'+995 555 97 13 26'} />
        <ContactInfo src={instagram} href={'https://www.instagram.com/batumi.homes/'} alt={'instagram'} text={'@batumi.homes'} />
        <Link to='contact' smooth={true} duration={500} ><ContactInfo src={mail} alt={'mail'} text={'batumi.realty.servises@gmail.com'} /></Link>
      </div>
    </div>

  )
}

export default Contacts