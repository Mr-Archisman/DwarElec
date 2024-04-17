import React from "react";
import { useState, useEffect } from 'react';
function AboutUsSection() {
    
    const sentence = "The journey of Dakshineswar Electric is a testament to what vision, expertise, and a commitment to quality can achieve. Starting in 2005, we've carved a niche in the electrical industry by providing solutions that enhance efficiency and safety. Our story is not just about the panels we design or the systems we retrofit; it's about the value we add to every project and the difference we make in the industries we serve."
    return (
    <section id="about" className="h-[60vh] sm:h-[95vh] 2xl:h-[75vh] flex flex-col md:flex-row justify-between items-center py-24 px-4 md:pb-[5rem] md:pt-[5rem] md:px-[7rem] 2xl:py-[5rem] 2xl:px-[12rem] bg-customCream">
      {/* Container for the image and text box */}
      <div className="relative w-full md:flex md:items-center">
        {/* Image container that takes up 70% width from the left */}
        <div className="max-sm:hidden md:w-7/10 h-full">
          <img
            src="/images/about.png"
            alt="About us"
            className="w-full h-full object-cover z-0 ring-2 ring-primary rounded-xl"
          />
        </div>

        {/* Overlay Text Box that takes up 30% width and is absolutely positioned */}
        <div className="absolute md:left-[36rem] md:top-50 md:w-3/10 p-4 md:p-12 text-primary text-center bg-lightBlue z-10 ring-2 ring-primary rounded-md">
          <h1 className="text-2xl md:text-4xl font-bold font-montserrat">Engineering Solutions Empowering Industries</h1>
          <p className="mt-4 text-sm md:text-xl font-karla">
          {sentence}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
