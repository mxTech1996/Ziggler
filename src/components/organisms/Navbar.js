'use client';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { FaShoppingCart } from 'react-icons/fa';

export default function ElectricianNavbar() {
  const { products } = useCart();
  return (
    <header className='sticky top-0 z-50 bg-[#042935] text-white flex items-center justify-between px-6 py-3 shadow-md'>
      {/* Left Section - Logo */}
      <div className='flex items-center gap-2'>
        <img
          src={dataSite.iconImage}
          alt='Logo'
          className='w-10 h-10 rounded-full border border-lime-400'
        />
        <span className='font-bold text-lg'>Ziggler</span>
      </div>

      {/* Center Section - Links */}
      <nav className='hidden md:flex gap-6'>
        <span
          onClick={() => {
            window.location.href = '/#about';
          }}
          className='cursor-pointer hover:underline'
        >
          About Us
        </span>
        <span
          onClick={() => {
            window.location.href = '/#services';
          }}
          className='cursor-pointer hover:underline'
        >
          Services
        </span>
        <span
          onClick={() => {
            window.location.href = '/#shop';
          }}
          className='cursor-pointer hover:underline'
        >
          Shop
        </span>
        <span
          onClick={() => {
            window.location.href = '/#testimonials';
          }}
          className='cursor-pointer hover:underline'
        >
          Testimonials
        </span>
      </nav>

      {/* Right Section - Cart & Button */}
      <div className='flex items-center gap-4'>
        <div className='relative'>
          <FaShoppingCart className='text-white text-xl' />
          <span className='absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-4 h-4 flex items-center justify-center'>
            {products.length}
          </span>
        </div>
        <button
          onClick={() => {
            window.location.href = '/more-information';
          }}
          className='bg-lime-400 text-black rounded-full px-4 py-1 font-semibold'
        >
          Let&#39;s Talk
        </button>
      </div>
    </header>
  );
}
