import { dataSite } from '@/data';

export default function IntroSection() {
  return (
    <section id='about' className='max-w-4xl mx-auto text-center px-4 py-12'>
      <p className='text-2xl md:text-3xl font-semibold text-slate-900 mb-6'>
        At DigitalConsult, we pride ourselves on delivering cutting-edge IT and
        Computer Consulting Services. With a dedicated team{' '}
        <img
          src={dataSite.image_hero2}
          alt='Team Member 2'
          className='inline-block w-8 h-8 rounded-full mx-1 align-middle'
        />
        of certified technology experts, we provide scalable and secure digital
        solutions to help businesses optimize performance, security, and growth.
        Whether you&#39;re a small business or a global enterprise, we deliver
        top-tier IT consulting{' '}
        <img
          src={dataSite.services[0].image}
          alt='Team Member 3'
          className='inline-block w-8 h-8 rounded-full mx-1 align-middle'
        />
        services tailored to your needs.
      </p>
    </section>
  );
}
