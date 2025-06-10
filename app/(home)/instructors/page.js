"use client";

import React from 'react';

import InstructorsClient from '../../../appPages/Instructors/InstructorClient';
function page() {
  return (
    <>
      <InstructorsClient />

      <div className='w-full mx-auto mt-10 rounded-xl overflow-hidden shadow-lg'>
        <iframe
          title='Google Map with Marker'
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12089.738127725638!2d-73.9851304!3d40.758896!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d2996c5f%3A0x3d6f8d6c917f9e4e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1717616158731!5m2!1sen!2sus'
          className='w-full h-[400px] border-0'
          allowFullScreen={true}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </>
  );
}

export default page;