"use client";

import React, { useState } from "react";
import Link from "next/link";
import MainButton from "../common/MainButton";
import Modal from "../common/Modal";
import Image from "next/image";

const FooterSection = () => {
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
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // console.log(formData);
    try {
      const response = await fetch("/api/contact", {
        // Ensure this matches your actual API route
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { data } = await response.json();
      console.log(data, formData);
      closeModal();
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <footer id="contact" className="flex flex-col items-center py-24 px-4 md:pb-[5rem] md:pt-[5rem] md:px-[7rem] 2xl:py-[5rem] 2xl:px-[12rem] bg-customCream">
      <div className="w-full flex flex-col items-center text-center bg-primary  py-6 md:py-12 rounded-md border border-lightBlue ring-2 ring-primary">
        <h1 className="text-2xl md:text-4xl font-bold text-center font-montserrat text-customCream"> Have an idea? Let&apos;s get your project started today!</h1>
        <MainButton
          text="Get In Touch"
          action={openModal}
          classes="shadow-none w-[10.125rem] bg-lightBlue text-primary hover:text-customCream hover:bg-primary hover:ring-2 hover:ring-lightBlue text-base ring-1 ring-primary mt-4 md:mt-8"
        />
      </div>
      <div className="w-full flex justify-between items-center text-center py-6 md:py-12  border-b border-primary">
        <div>
          <a href="#home"><Image src="/images/loggo.png" alt="logo" width={96} height={66} className="rounded-md"/></a>
        </div>
        <div className="flex items-center gap-[15px] cursor-pointer">
          <Image src="/images/Facebook.png" alt="logo" width={16} height={16}/>
          <Image src="/images/YouTube.png" alt="logo" width={16} height={16}/>
          <Image src="/images/Instagram.png" alt="logo" width={16} height={16}/>
          <Image src="/images/Twitter.png" alt="logo" width={16} height={16}/>
          {/* <Image src="/images/Linkedin.png" alt="logo" width={16} height={16}/> */}
            {/* <MainButton text="Sign up" classes="shadow-none" /> */}
          </div>
      </div>
      <div className="w-full text-center bg-lightBlue py-8 rounded-b-md">
      © 2024 All right reserved by Dakhineswar Electric
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className="overflow-y-auto max-h-[90vh]">
        <form onSubmit={handleSubmit} className="my-auto">
          <div className="flex justify-between items-center text-center mb-2 md:mb-3 2xl:mb-4">
            <h2 className="text-xl font-semibold my-auto text-center">Contact Us</h2>
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
            rows={1}
            value={formData.message}
            onChange={handleInputChange}
            className="block w-full mb-2 p-2 border rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-primary hover:bg-lightBlue hover:text-primary text-customCream font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
        </div>
      </Modal>
    </footer>
  );
};

export default FooterSection;
