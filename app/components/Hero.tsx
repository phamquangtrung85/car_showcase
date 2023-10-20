'use client';
import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';
import { generateCarImageUrl } from '@/utils';


const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>tìm, đặt, thuê xe nhanh chóng dễ dàng!</h1>
        <p className='hero__subtitle'>
          Dòng xe của bạn thuê theo kinh nghiệm hãy đặt trước
        </p>
        <CustomButton
          title='xem xe'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image 
          src='/hero.png'
          
          alt='hero' fill className='object-contain' />
          <div className='hero__image-overlay' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
