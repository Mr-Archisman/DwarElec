"use client"

import dynamic from 'next/dynamic';
import AboutSection from "@/components/sections/AboutSection";
import ClientsSection from "@/components/sections/ClientsSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import MajorProjectsSection from "@/components/sections/MajorProjectsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VideoPlayerSection from "@/components/sections/VideoPlayerSection";
import { useEffect, useState } from "react";


const NavBar = dynamic(() => import('../components/common/NavBar'), { ssr: false });

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-lightBlue flex flex-col items-center justify-center">
      <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <div className="mt-4 text-primary font-karla text-lg">Loading...</div>
    </div>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to change the loading state after 2000 milliseconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Render the Loader component while loading
    return <Loader />;
  }
  return (
    <main>
      <NavBar />
      {/* <div className="mt-24 md:32 lg:mt-8 px-4  md:px-[9rem]"> */}
        <HeroSection />
        <AboutSection />
        <IndustriesSection />
        <ServiceSection />
        <MajorProjectsSection />
        <ClientsSection />
        <TestimonialsSection />
        {/* <VideoPlayerSection />
        <TestimonialSection />
        <TeamSection />
        <NewsletterSection /> */}
        <FooterSection />
      {/* </div> */}
    </main>
  );
}
