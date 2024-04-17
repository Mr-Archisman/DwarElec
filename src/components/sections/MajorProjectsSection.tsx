"use client"
import React, { useEffect } from 'react';

import dynamic from 'next/dynamic';


  const Slider = dynamic(() => import('react-slick'), {
    ssr: false,
  });

interface ProjectCardProps {
    imageSrc: string;
    name: string;
    position: string;
}
  const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc,name,position, }) => {
  return (
    <div className="project-card text-center mx-2">
      <img src={imageSrc} alt={name} className="mx-auto h-60 w-72 rounded-md border border-primary hover:shadow-2xl hover:shadow-primary" />
      <h3 className="mt-4 font-semibold uppercase p-2 text-primary font-karla text-sm md:text-base">{name}</h3>
      {/* <p className="text-sm">{position}</p> */}
    </div>
  );
};

function MajorProjectsSection() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
          require('slick-carousel/slick/slick.css');
          require('slick-carousel/slick/slick-theme.css');
        }
      }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500, // Slides will change every 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true, // Enable center mode for smaller screens
            centerPadding: '80px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // You would get these project details from your back-end or context
  const projects = [
    {
        imageSrc:'/images/proj1.jpg',
        name:'New 220HP Drive line up Panel, Tata Chemicals Limited, Haldia ',
        position:'',
    },
    {
        imageSrc:'/images/proj5.jpg',
        name:'New 220HP Drive line up Panel, Tata Chemicals Limited, Haldia ',
        position:'',
    },
    {
        imageSrc:'/images/proj6.jpg',
        name:'DRAWOUT PANEL SUPPLYED BY L&T AT BAKRESWAR THERMAL POWER AFTER REVAMPING',
        position:'',
    },
    {
        imageSrc:'/images/proj2.jpg',
        name:'New 220HP Drive line up Panel, Tata Chemicals Limited, Haldia',
        position:'',
    },
    {
        imageSrc:'/images/proj3.jpg',
        name:'New 220HP Drive line up Panel, Tata Chemicals Limited, Haldia',
        position:'',
    },
    {
        imageSrc:'/images/proj4.jpg',
        name:'Existing SCALE PIT SOFT STARTER AT TISCO, Merchant Mill',
        position:'',
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-4 md:pb-[5rem] md:pt-[5rem] md:px-[7rem] 2xl:py-[5rem] 2xl:px-[12rem] bg-backGroundSec"
    >
      <div className="w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-center font-montserrat text-primary font-montserrat">Major Projects</h1>
        <p className="mt-4 mb-8 md:mb-16 text-sm md:text-xl font-karla text-primary text-center font-karla font-light">
        Highlighting Our Groundbreaking Work in Automation and Electrification
        </p>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.imageSrc}
              name={project.name}
              position={project.position}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default MajorProjectsSection;
