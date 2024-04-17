"use client"

import React from 'react';
import dynamic from 'next/dynamic';
import test from 'node:test';

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
});

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, position }) => {
  return (
    <div className="testimonial-card bg-lightBlue border-2 border-primary ring-primary ring-inset rounded-xl mx-2 hover:scale-95 transform transition ease-in-out duration-300">
      <div className="p-4 text-primary bg-lightBlue rounded-lg border border-primary shadow-lg min-h-[14rem] flex flex-col justify-between items-start text-left">
        <div className="basis-1/5">
        <img src="/images/rating.png" alt="rating" className='h-6'/>
        </div>
        <div className="basis-2/5">
        <p className="text-sm md:text-base  font-semibold font-karlamy-4">{quote}</p>
        </div>
        <div className='basis-2/5'>
        <div className='flex justify-start items-center text-left '>
          <div>
            <img src="/images/profilecircle.png" alt="profilecircle" className='h-12'/>
          </div>
          <div className='ml-4'>
          <h3 className="font-semibold">{author}</h3>
          <p className="text-xs md:text-sm font-light">{position}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '80px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  // Dummy data for testimonials
  const testimonials = [
    {
      quote: "The proficiency Dakshineswar Electric brings to the table is unparalleled. They not only meet expectations; they consistently exceed them.",
      author: "Rajiv Mehta",
      position: "Director of Operations, TATA Steel",
    },
    {
        quote: "Choosing DE for our electrical infrastructure needs was a game-changer. Their precision and dedication are evident in every project",
        author: "Anita Desai",
        position: "Chief Engineer, IOCL Kolaghat",
      },{
        quote: "With DE's expertise, our transition to more efficient power systems was seamless and incredibly effective.",
        author: "Amit Verma",
        position: "VP of Manufacturing, TATA Motors",
      },
      {
        quote: "We rely on Dakshineswar Electric for their swift and innovative solutions. They are truly at the forefront of electrical engineering services.",
        author: "Nikhil Ranjan",
        position: "Project Manager, Bokreswar Thermal Power",
      },{
        quote: "Time and again, DE proves their commitment to not just meeting, but also anticipating our industrial needs with cutting-edge solutions.",
        author: "Surya Prakash",
        position: "Lead Electrical Engineer, Kolaghat Thermal Power",
      },
  ];

  return (
<section
      id="testimonials"
      className="py-24 px-4 md:pb-[5rem] md:pt-[5rem] md:px-[7rem] 2xl:py-[5rem] 2xl:px-[12rem] bg-backGroundSec"
    >
      <div className="w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-center font-montserrat text-primary font-montserrat">Endorsements from the Field&apos;s Best</h1>
        <p className="mt-4 mb-8 md:mb-16 text-sm md:text-xl font-karla text-primary text-center font-karla font-light">
        The narrative of our success is best told through the satisfaction of our clients. Their experiences underscore our role as industry leaders in electrical solutions.
        </p>
        <Slider {...settings}>
          {testimonials.map((testimonial,index ) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            position={testimonial.position}
            />
          ))}
        </Slider>
      </div>
    </section>
  )
}
export default TestimonialsSection;