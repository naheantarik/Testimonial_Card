import React from 'react';
import TestimonialCard from '../components/icons/testimonialCard';
import ClientImage from '../../../public/assets/image/ClientImage.png';


const Testimonial = () => {
    const testimonials = [
        {
          name: 'Gemma Nolen',
          company: 'Google',
          image: ClientImage.src,
          quote: 'An amazing experience with this product!',
          starCount: 3,
        },
        {
          name: 'John Doe',
          company: 'Facebook',
          image: ClientImage.src,
          quote: 'Highly recommend it to everyone!',
          starCount: 4,
        },
        {
          name: 'Jane Smith',
          company: 'Amazon',
          image: ClientImage.src,
          quote: 'Best service I have ever used!',
          starCount: 5,
        },
        {
          name: 'Emily Johnson',
          company: 'Microsoft',
          image: ClientImage.src,
          quote: 'Exceptional quality and support.',
          starCount: 4,
        },
        {
          name: 'Michael Brown',
          company: 'Apple',
          image: ClientImage.src,
          quote: 'Absolutely love it!',
          starCount: 5,
        },
        {
          name: 'Linda Davis',
          company: 'Netflix',
          image: ClientImage.src,
          quote: 'A game changer in my workflow!',
          starCount: 5,
        },
      ];
    
  return (
    <section>
        <div className='max-w-[1280px] mx-auto p-6'>

            <div className='text-center font-Epilogue font-semibold text-[32px] leading-[42px]'>
                <h2>Testimonial</h2>
            </div>

            <div className='grid grid-cols-3 gap-6 mt-[42px]'>
                {
                    testimonials.map((testimonial, index) => {
                        return (
                            <TestimonialCard key={index} name={testimonial.name} company={testimonial.company} image={testimonial.image} starCount={testimonial.starCount} quote={testimonial.quote}/>
                        )
                    })
                }
            </div>


        </div>
    </section>
  );
};

export default Testimonial;