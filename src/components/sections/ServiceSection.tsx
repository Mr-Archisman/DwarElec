import React from "react";
import ServiceCard from "../cards/ServiceCard";


function ServicesSection() {
  // Array of service objects for easy mapping
  const services = [
    {
      title: "ELECTRICS & AUTOMATION",
      description: "We offer solutions from Conceptualization to commissioning, working with customers for successful execution. With over two decades of experience in Electrification & automation, DE is the preferred choice for electrical turnkey projects.",
      imageSrc: "/images/electric.png", // Replace with actual path to image
      index: "01"
    },
    {
      title: "AUTOMATION SYSTEM (PLC & DCS / SCADA)",
      description: "We provide Solutions for Industrial process & factory Automation for a wide Spectrus across industries. Our Solutions are based upon knowledge & experience of our experts acquired over two decades executing more than 500 Projects.",
      imageSrc: "/images/automate.png", // Replace with actual path to image
      index: "02"
    },
    {
      title: "UPGRADATION",
      description: "As automation systems inevitably age, we support customers in navigating the complexities of adopting new technologies and maintaining cost-effective operations, ensuring longevity and efficiency.",
      imageSrc: "/images/upgrade.png", // Replace with actual path to image
      index: "03"
    },
    {
      title: "ANNUAL MAINTENANCE CONTRACT",
      description: "We provide Annual Maintenance Contract (AMC) services for Industrial Automation. With the help of our experienced professionals, DE undertake Industrial Annual Maintenance Contracts related to factory or industrial Automation.",
      imageSrc: "/images/maint.png", // Replace with actual path to image
      index: "04"
    }
  ];

  return (
    <section
      id="services"
      className="flex flex-wrap justify-center items-center py-24 px-4 md:pb-[5rem] md:pt-[5rem] md:px-[7rem] 2xl:py-[5rem] 2xl:px-[12rem] bg-customCream"
    >
      <div className="w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-center font-montserrat text-primary">Services We Provide</h1>
        <p className="mt-4 mb-8 md:mb-16 text-sm md:text-xl font-karla text-primary text-center">
        Crafting Modern Solutions for Timeless Challenges
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              index={service.index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

