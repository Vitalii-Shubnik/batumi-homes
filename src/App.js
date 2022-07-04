import React from 'react';
import Navbar from './navbar/Navbar'
import PageWraper from './wraper/PageWraper';
import Contact from './contact/Contact';
import Contacts from './contacts/Contacts';
import Location from './location/Location';
import Homepage from './homepage/Homepage';
import Reviews from './reviews/Reviews';
import ForSells from './forsell/ForSells';
import MainObject from './mainobject/MainObject';
import Stages from './stages/Stages';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='divide-y divide-gray-700'>
        <PageWraper name='homepage' customClassName='bg-no-repeat bg-cover bg-bg1' firstpage={true}>
          <Homepage />
        </PageWraper>
        <PageWraper name='location' customPosition={true} customClassName='flex flex-col justify-center'>
          <Location />
        </PageWraper>
        <PageWraper name='mainobject'>
          <MainObject />
        </PageWraper>
        <PageWraper name='forsell' customPosition={true} customClassName='flex flex-col justify-center' >
          <ForSells />
        </PageWraper>
        <PageWraper name='stages'>
          <Stages />
        </PageWraper>
        <PageWraper name='reviews'>
          <Reviews />
        </PageWraper>
        <PageWraper name='contacts'>
          <Contacts />
        </PageWraper>
        <PageWraper name='contact' customPosition={true} customClassName='flex flex-col justify-center' lastpage={true}>
          <Contact />
        </PageWraper>
      </div>
    </>
  );
}

export default App;
