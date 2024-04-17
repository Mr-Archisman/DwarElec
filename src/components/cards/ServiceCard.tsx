import React from 'react';

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  index: string; // Assuming index is a string like "01", "02", etc.
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description, index }) => {
  return (
    <div className="service-card bg-lightBlue ring-2 ring-primary rounded-xl p-6 text-center flex flex-col items-center shadow-2xl h-full text-primary hover:scale-95 transform transition ease-in-out duration-300 hover:shadow-2xl hover:text-customCream hover:bg-primary hover:ring-lightBlue ">
      <div className="flex flex-col justify-center items-center h-1/5 mb-2">
        <img src={imageSrc} alt={title} className="w-20 h-20 2xl:w-28 2xl:h-28 object-cover " />
      </div>
      <div className="flex flex-col justify-center items-center h-1/5 2xl:pt-6">
        <h3 className="text-lg md:text-xl  font-bold font-montserrat">{title}</h3>
      </div>
      <div className="description h-3/5 flex items-center pt-4">
        <p className="text-sm md:text-base  font-karla">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;





// import React from "react";
// import MainButton from "../common/MainButton";

// interface IProps {
//   iconUrl: string;
//   title: string;
//   description: string;
//   action?: () => void;
// }

// function ServiceCard({ iconUrl, title, description, action }: IProps) {
//   return (
//     <div className="flex flex-grow flex-col gap-[2.56rem]  pt-[1.91rem] pb-[2.81rem] px-[2.56rem] items-center service-card-shadow rounded-[1.75rem]">
//       <div>
//         <img src={iconUrl} alt="service icon" />
//       </div>
//       <p className="text-[2.25rem] font-[700]">{title}</p>
//       <p className="text-normal">{description}</p>
//       <MainButton text="Learn More" action={action} classes="w-[10.125rem]" />
//     </div>
//   );
// }

// export default ServiceCard;
