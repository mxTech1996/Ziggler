'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dataSite } from '@/data';

const services = dataSite.services;

export default function ServicesCarousel() {
  const [current, setCurrent] = useState(0);
  const service = services[current];

  const next = () => setCurrent((prev) => (prev + 1) % services.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section
      id='services'
      className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-12'
    >
      <div>
        <AnimatePresence mode='wait'>
          <motion.div
            key={service.title}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className='text-3xl font-semibold mb-4'>{service.title}</h2>
            <p className='mb-6 text-gray-600'>{service.description}</p>
            <ul className='space-y-2 mb-6'>
              <li>✅ Strategic IT Roadmapping</li>
              <li>✅ Digital Transformation Planning</li>
              <li>✅ Technology Risk Mitigation</li>
            </ul>
            <button
              onClick={() => {
                window.location.href = '/more-information';
              }}
              className='flex items-center bg-slate-900 text-lime-400 px-6 py-3 rounded-full'
            >
              Contact Us
              <span className='ml-2 bg-lime-400 text-slate-900 rounded-full px-2'>
                ⚡
              </span>
            </button>
          </motion.div>
        </AnimatePresence>
        <div className='flex gap-4 mt-6'>
          <button
            onClick={prev}
            className='border rounded-full w-10 h-10 flex items-center justify-center'
          >
            ←
          </button>
          <button
            onClick={next}
            className='border rounded-full w-10 h-10 flex items-center justify-center'
          >
            →
          </button>
        </div>
      </div>
      <motion.img
        key={service.image}
        src={service.image}
        alt={service.title}
        className='rounded-2xl w-full object-cover'
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.3 }}
      />
    </section>
  );
}
