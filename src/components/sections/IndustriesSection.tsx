import React from "react";

function IndustriesSection() {
    const images = [
        { img: '/images/chemical.jpg', text: 'Chemical Industry' },
        { img: '/images/oilgas.jpg', text: 'Oil and Gas Industry' },
        { img: '/images/railways.jpg', text: 'Railways Industry' },
        { img: '/images/metal.jpg', text: 'Metal Industry' },
    ];
  return (
    <section id="industries" className="flex flex-col items-center py-24 px-4 md:pb-[5rem] md:pt-[5rem] md:px-[7rem] 2xl:py-[5rem] 2xl:px-[12rem] bg-backGroundSec">
      <div className="flex flex-wrap justify-between items-center w-full bg-primary p-8 rounded-lg ring-2 ring-primary border-lightBlue border-2">
        {/* Text Column */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4 md:px-16 text-center">
          <h1 className="text-2xl p-3 lg:text-4xl font-bold shadow-md rounded-md text-customCream mb-4 font-montserrat">INDUSTRIES WE SERVE</h1>
          <p className=" font-light pt-8 text-sm md:text-xl text-customCream font-karla">
          At Dakshineswar Electric, we pride ourselves on serving a wide array of industries with our expertly engineered electrical solutions. From the renewable energy pulse of solar power systems to the foundational infrastructure of railways and mining, our proficiency spans across water treatment, metals, automotive, cement, chemicals, and food & beverage sectors. Each solution is crafted to meet the unique challenges and standards of these diverse fields, ensuring efficiency, safety, and reliability in every project we undertake.
          </p>
        </div>

        {/* Bento Box Layout for Images */}
        <div className="w-full lg:w-1/2 flex flex-wrap justify-end items-center gap-x-4">
          {/* Individual image container */}
          <div className="grid grid-cols-2 items-center gap-8">
          {images.map((item,index) => (
            <div
            style={index === 0 ||index === 2 ? { marginTop: '1.5rem' } : { marginTop: '0px' }}
            key={index} className="hover:scale-105 ease-in-out transform translate-x-1 w-full p-4 bg-customCream rounded-lg shadow-lg flex flex-col items-center justify-center border-primary border-2 ring-2 ring-lightBlue transition duration-300">
              <img src={item.img} alt={`Thumbnail ${item}`} className="mb-2" />
              <p className="text-base text-primary font-karla font-semibold">{item.text}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
