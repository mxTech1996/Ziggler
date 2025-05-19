'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const solutions = [
  'IT Infrastructure Optimization',
  'Cloud Strategy Consulting',
  'Cybersecurity Audits',
  'Data Analytics & Reporting',
  'Disaster Recovery Planning',
];

export default function ConsultingSolutions() {
  return (
    <section className='bg-slate-900 text-white py-12 px-4 text-center'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='text-3xl font-semibold mb-8'
      >
        Solutions Tailored to Your IT Needs
      </motion.h2>

      <div className='flex flex-wrap justify-center gap-4 max-w-4xl mx-auto'>
        {solutions.map((solution, index) => (
          <motion.div
            key={solution}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className='flex items-center gap-2 px-4 py-2 bg-slate-700 rounded-full border border-slate-600 shadow-sm'
          >
            <FaCheckCircle className='text-lime-400' />
            <span className='text-white font-medium'>{solution}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
