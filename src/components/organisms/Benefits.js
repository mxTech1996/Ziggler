'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import { FaCogs, FaRocket, FaHeadset } from 'react-icons/fa';

const iconComponents = [FaCogs, FaRocket, FaHeadset];

const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * iconComponents.length);
  const IconComponent = iconComponents[randomIndex];
  return <IconComponent className='text-lime-400 text-4xl mb-4' />;
};
const benefits = dataSite.info.map((item) => ({
  title: item.title,
  description: item.description,
  icon: getRandomIcon(),
}));

export default function Benefits() {
  return (
    <section className='bg-slate-900 text-white py-16 px-4 text-center'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='text-3xl font-semibold mb-12'
      >
        Enjoy Special IT Consulting Benefits
      </motion.h2>

      <div className='flex flex-wrap justify-center gap-8 max-w-6xl mx-auto'>
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.4 }}
            className='bg-slate-700 rounded-xl shadow-md p-8 max-w-xs text-left'
          >
            {benefit.icon}
            <h3 className='text-xl font-semibold mb-2'>{benefit.title}</h3>
            <p className='mb-4'>{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
