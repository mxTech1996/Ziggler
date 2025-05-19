'use client';

import { dataSite } from '@/data';

export default function HeroSection() {
  const url = dataSite.image_hero;
  return (
    <section
      className='relative bg-fixed bg-center bg-cover h-screen flex items-center justify-start px-6'
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className='max-w-2xl bg-black bg-opacity-50 p-8 rounded-lg'>
        <p className='text-lime-400 font-semibold uppercase mb-2'>
          Computing Solutions
        </p>
        <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
          {dataSite.subtitle}
        </h1>
        <p className='text-white mb-6'>{dataSite.description}</p>
        <button
          onClick={() => {
            window.location.href = '/more-information';
          }}
          className='flex items-center gap-2 bg-lime-400 text-black font-semibold rounded-full px-5 py-2'
        >
          Contact Us Today <span className='text-xl'>⚡</span>
        </button>
      </div>
    </section>
  );
}
