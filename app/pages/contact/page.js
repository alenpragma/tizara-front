"use client"
import React, { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    companyName: '',
    companySize: '',
    countryRegion: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // formData now contains all the form data
    console.log('Form Data:', formData);
  };

  return (
    <div
    className='max-w-container px-[10px] mx-auto py-[100px] flex justify-center'
    >
 <div className="bg-primary-bg p-6 rounded-lg shadow-lg w-full md:w-[50%]">
      <h1 className="text-3xl font-semibold text-primary-green mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-gray-400" htmlFor="firstName">First name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary- bg-transparent"
            required
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-400" htmlFor="lastName">Last name*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green bg-transparent"
            required
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-400" htmlFor="workEmail">Work email*</label>
          <input
            type="email"
            id="workEmail"
            name="workEmail"
            className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green bg-transparent"
            required
            value={formData.workEmail}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-400" htmlFor="companyName">Company name*</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green bg-transparent"
            required
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-400" htmlFor="companySize">Company size*</label>
          <select
            id="companySize"
            name="companySize"
            className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green bg-transparent"
            required
            value={formData.companySize}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select...</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-gray-400" htmlFor="countryRegion">Country or region*</label>
          <select
            id="countryRegion"
            name="countryRegion"
            className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green bg-transparent"
            required
            value={formData.countryRegion}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select...</option>
            <option value="usa">USA</option>
            <option value="canada">Canada</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-primary-green text-white p-2 rounded hover:bg-opacity-90"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ContactUs