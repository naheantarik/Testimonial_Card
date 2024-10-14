import React from 'react';
import StarIcon from './starIcon';


const TestimonialCard = ({name, company, image, starCount, quote}) => {
  return (
    <div className='bg-[#F3F3F3] p-[42px] flex flex-col'>

                <div className='font-Epilogue font-semibold text-[20px] leading-[30px] flex-grow'>
                    <p>{quote}</p>
                </div>

                <div className='flex gap-4 items-start mt-[68px]'>
                   <img className='rounded-full' src={image} alt="" />
                   <div className='space-y-[11px]'>
                    <div className='flex gap-1'>
                            {Array.from({ length: starCount }).map((number, i) => (
                                <span key={i}><StarIcon /></span>
                            ))}
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>{name}</h2>
                        <p className='text-base'>{company}</p>
                    </div>
                   </div>
                </div>

            </div>
  );
};

export default TestimonialCard;