import React from 'react';

const HeroSection = () => {
  return (
    <section className='bg-[#F5F5F5] mt-[164px]'>
        <div className='bg-[#F4F6F5] rounded-[59px]'>
            <div>
            <div className='pt-[77px]'>
             <h1 className='font-Poppins uppercase'>
                <span className='font-black text-[96px] before:bg-white before:absolute before:w-[calk] before:h-[112.14px] relative before:-z-10 z-10 '>Let's</span>
                <span>Explore</span>
                <span>Unique</span>
                <span>Clothes.</span>
             </h1>

            </div>
            <div>
                <p>Live for Influential and Innovative fashion!</p>
                <button>Shop Now</button>
            </div>
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    </section>
  );
};

export default HeroSection;