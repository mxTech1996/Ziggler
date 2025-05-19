'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Laura Thompson',
    role: 'Operations Manager at TechEdge',
    feedback:
      'The consulting team transformed our IT operations. Their proactive strategies helped us reduce downtime and improve system performance significantly.',
  },
  {
    name: 'Michael Lee',
    role: 'Founder at Softify Solutions',
    feedback:
      'Exceptional service! Their expertise in cloud integration and security gave us the confidence to scale our platform globally.',
  },
  {
    name: 'Emma Davis',
    role: 'CTO at GreenBuild',
    feedback:
      'Their comprehensive IT audits and recommendations have been invaluable for optimizing our tech infrastructure and minimizing risks.',
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id='testimonials' className='py-16 px-4 bg-[#f7fefc] text-center'>
      <h2 className='text-3xl font-semibold mb-8'>What Our Clients Say</h2>
      <div className='max-w-xl mx-auto relative'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className='bg-white p-6 rounded-md shadow-md'
          >
            <p className='text-lg mb-4 text-gray-700'>
              &ldquo;{testimonials[index].feedback}&rdquo;
            </p>
            <h4 className='font-semibold'>{testimonials[index].name}</h4>
            <p className='text-sm text-gray-500'>{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>
        <div className='flex justify-center gap-4 mt-6'>
          <button
            onClick={prevTestimonial}
            className='p-2 border rounded-full hover:bg-gray-100 transition'
            aria-label='Previous testimonial'
          >
            ◀
          </button>
          <button
            onClick={nextTestimonial}
            className='p-2 border rounded-full hover:bg-gray-100 transition'
            aria-label='Next testimonial'
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
