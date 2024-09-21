import React from 'react';
import mapsImg from '@/images/maps.jpg';
import Image from 'next/image';

const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';

const Page = ({params}: {params: {id: string}}) => {
  return (
    <div>
      <h1 className='text-4xl'>ID : {params.id}</h1>
      <section className='flex gap-x-4 mt-4' >
        {/* local image */}
        <div>
          <Image
            src={mapsImg}
            alt='maps'
            priority // load image first
            width={192}
            height={192}
            className='w-48 h-48 object-cover rounded-none' />
          <h2 className='text-xl'>Local Image</h2>
        </div>
        {/* remote image */}
        <div>
          <Image
            src={url}
            alt='tour'
            priority
            width={192}
            height={192}
            className='w-48 h-48 object-cover rounded-none' />
          <h2 className='text-xl'>Remote Image</h2>
        </div>
      </section>
    </div>
  );
}

export default Page;
