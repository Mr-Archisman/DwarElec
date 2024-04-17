"use client";

import { SetStateAction, useEffect, useState } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
import Image from "next/image";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState(window.location.hash.slice(1) || 'home');

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      setActiveSection(newHash);
    };

    // Set the initial active section based on the URL when the component mounts
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const NavLink = ({ href, children }:any) => (
    <a
      href={href}
      className={`font-montserrat text-primary cursor-pointer flex items-center text-base font-semibold rounded-xl px-3 2xl:px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream ${
        activeSection === href.slice(1) ? 'bg-primary text-customCream' : ''
      }`}
    >
      {children}
    </a>
  );

  const toggleMenu = () => {
    setMenu(!menu);
  };
  // console.log(activeSection)
  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 ">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-[#DBE2EF] p-2.5 rounded-b-md">
        <div className="flex justify-between md:mx-[9rem] items-center">
          <div className="flex gap-[5px] 2xl:gap-[50px] text-[16px] items-center select-none">
            <Image src="/images/loggo.png" alt="logo" width={96} height={66} className="rounded-md"/>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#industries">Industries</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#clients">Clients</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            {/* <a href="#home">
              <p
                className={`text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream font-montserrat`}
              >
                Home
              </p>
            </a>
            <a href="#about">
              <p
                className={`font-montserrat text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream`}
              >
                About
              </p>
            </a>
            <a href="#industries">
              <p
                className={`text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream font-montserrat`}
              >
                Industries
              </p>
            </a>
            <a href="#services">
              <p
                className={`font-montserrat text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream`}
              >
                Services
              </p>
            </a>
            <a href="#projects">
              <p
                className={`font-montserrat text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream`}
              >
                Projects
              </p>
            </a>
            <a href="#clients">
              <p
                className={`font-montserrat text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream`}
              >
                Clients
              </p>
            </a>
            <a href="#contact">
              <p
                className={`font-montserrat text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream`}
              >
                Contact
              </p>
            </a> */}
            </div>
          <div className="flex items-center gap-[15px] cursor-pointer">
          <Image src="/images/Facebook.png" alt="logo" width={16} height={16}/>
          <Image src="/images/YouTube.png" alt="logo" width={16} height={16}/>
          <Image src="/images/Instagram.png" alt="logo" width={16} height={16}/>
          <Image src="/images/Twitter.png" alt="logo" width={16} height={16}/>
          <Image src="/images/Linkedin.png" alt="logo" width={16} height={16}/>
            {/* <MainButton text="Sign up" classes="shadow-none" /> */}
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-lightBlue py-4 animate-in fade-in zoom-in rounded-b rounded-sm ${
          menu ? " bg-lightBlue py-2 border-b border" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px] bg-lightBlue">
          <div className="flex gap-[50px] text-[16px] items-center">
          <Image src="/images/loggo.png" alt="logo" width={96} height={66} className="rounded-md"/>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-primary"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/svgs/hamburger.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 animate-in slide-in-from-right bg-lightBlue">
            <div className="flex flex-col gap-8 mt-8 mx-4">
            <a href="#home">
              <p
                className={`text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream font-montserrat`}
              >
                Home
              </p>
            </a>
            <a href="#about">
              <p
                className={`font-montserrat text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream`}
              >
                About
              </p>
            </a>
            <a href="#industries">
              <p
                className={`text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream font-montserrat`}
              >
                Industries
              </p>
            </a>
            <a href="#services">
              <p
                className={`font-montserrat text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream`}
              >
                Services
              </p>
            </a>
            <a href="#projects">
              <p
                className={`font-montserrat text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream`}
              >
                Projects
              </p>
            </a>
            <a href="#clients">
              <p
                className={`font-montserrat text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream`}
              >
                Clients
              </p>
            </a>
            <a href="#contact">
              <p
                className={`font-montserrat text-primary cursor-pointer flex items-center gap-2 text-base font-semibold rounded-xl px-4 py-2 transition-colors duration-200 ease-in-out bg-transparent hover:bg-primary hover:text-customCream`}
              >
                Contact
              </p>
            </a>
              {/* <div className="flex flex-col gap-[40px] select-none">
                <p
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                  Login
                </p>
                <MainButton text="Sign up" classes="shadow-none" />
              </div> */}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
