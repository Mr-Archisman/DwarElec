"use client";

import React, { useState } from "react";
import MainButton from "../common/MainButton";
import Modal from "../common/Modal";

function HeroSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    industry: "",
    enquiry: "",
    name: "",
    contact: "",
    email: "",
    message: "",
  });
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    // console.log(formData);
    try {
      const response = await fetch('/api/contact', { // Ensure this matches your actual API route
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const {data} = await response.json();
      console.log(data,formData);
      closeModal();
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    // Apply the background image to the entire section
    <section
      id="home"
      className="flex justify-between flex-col md:flex-row gap-4 items-center py-64 px-4 md:pb-[9rem] md:pt-[7rem] md:px-[7rem] 2xl:py-[24rem] 2xl:px-[12rem] bg-cover bg-center"
      style={{ backgroundImage: "url(/images/hero.png)" }}
    >
      <div className="bg-transparent p-4 md:pr-1">
        <p className="font-semibold md:font-bold md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-customCream font-montserrat">
          Empowering Industries,
          <br /> Powering Progress
        </p>
        <p className="text-sm md:text-[20px] font-[500] text-customCream md:pr-44 pt-2 mt-2 md:leading-[2rem] font-karla">
          From critical power management to comprehensive control systems, we
          provide the key components to optimize your operations.With a legacy
          of trust built with giants like TATA and IOCL, we deliver on the
          promise of unmatched quality and unwavering support.
        </p>
        <div className="flex gap-[1.75rem] items-center mt-[1.5rem]">
          <MainButton
            text="Get In Touch"
            action={openModal}
            classes="shadow-none w-[10.125rem] bg-lightBlue text-primary hover:text-customCream hover:bg-primary hover:ring-lightBlue text-base ring-1 ring-primary"
          />
          {/* <div className="flex gap-[1.56rem] items-center">
            <img src="/images/fancy_play_icon.png" alt="play icon" className="opacity-80" />
            <p className="font-bold text-normal text-white">Learn More</p>
          </div> */}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
      <form onSubmit={handleSubmit} className="my-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold mb-4 my-auto">Contact Us</h2>
            <button
              type="button"
              onClick={closeModal}
              // className="absolute top-0 right-0 text-lg font-semibold p-2"
            >
              X
            </button>
          </div>

          <label htmlFor="industry" className="block mb-2">
            Select Your Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            className="block w-full mb-4 p-2 border rounded"
          >
            <option value="">--Please choose an option--</option>
            <option value="Steel">Steel & Metals</option>
            <option value="Energy">Energy</option>
            <option value="Food">Food & Beverages</option>
            <option value="Oil">Oil & Gas</option>
            <option value="Automotive">Automotive</option>
            <option value="Cement">Cement</option>
            <option value="Mining">Mining</option>
            <option value="Chemical">Chemical</option>
            <option value="Water">Water and Wastewater</option>
          </select>

          <label htmlFor="enquiry" className="block mb-2">
            Select Your Enquiry
          </label>
          <select
            id="enquiry"
            name="enquiry"
            value={formData.enquiry}
            onChange={handleInputChange}
            className="block w-full mb-4 p-2 border rounded"
          >
            <option value="">--Please choose an option--</option>
            <option value="Product">Product</option>
            <option value="Service">Service</option>
            <option value="Upgradation">Upgradation</option>
            <option value="Retrofitting">Retrofitting</option>
            <option value="Training">Training</option>
            <option value="General">General Enquiry</option>
          </select>

          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          />

          <label htmlFor="contact" className="block mb-1">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          />

          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          />

          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={2}
            value={formData.message}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </Modal>
      {/* Remove the previous image div as it's no longer necessary */}
    </section>
  );
}

export default HeroSection;


// 0gtxLaDR4F0oL3wO archsas123