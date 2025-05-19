'use client';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const products = dataSite.products;

export default function ShopSection() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section id='shop' className='py-16 px-4 bg-white text-center'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='text-3xl font-semibold mb-12'
      >
        Pricing That Suits Your IT Consulting Needs
      </motion.h2>

      <div className='flex flex-wrap justify-center gap-8 max-w-6xl mx-auto'>
        {products.map((plan, index) => {
          const isInCart = validateProductInCart(plan.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(plan.id);
          };

          return (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              className={`rounded-lg border ${
                plan.recommended
                  ? 'bg-gray-50 border-gray-300 shadow-lg'
                  : 'border-gray-200'
              } p-8 max-w-xs text-left relative`}
            >
              {plan.recommended && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full'>
                  RECOMMENDED
                </div>
              )}

              {/* img */}
              <img
                src={plan.image}
                alt={plan.title}
                className='w-40 h-40 mx-auto mb-4 rounded-full border border-gray-300'
              />

              <h3 className='text-xl font-semibold mb-2 text-center'>
                {plan.name}
              </h3>
              <p className='mb-4 text-center text-gray-600'>
                {plan.description.slice(0, 100)}..
              </p>
              <div className='text-center text-4xl font-bold text-gray-800 mb-2'>
                {plan.price}
                <span className='text-base font-normal'>{plan.frequency}</span>
              </div>
              <ul className='mb-4 space-y-2'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex items-center'>
                    <FaCheck className='text-green-500 mr-2' /> {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={handleClick}
                style={{
                  backgroundColor: isInCart ? '#f87171' : '#84cc16',
                }}
                className='bg-lime-400 text-gray-900 font-semibold w-full rounded-md py-2 hover:bg-lime-500 transition'
              >
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                <span className='ml-2'>
                  {isInCart ? (
                    <FaCheck className='inline' />
                  ) : (
                    <span className='text-xl'>⚡</span>
                  )}
                </span>
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
