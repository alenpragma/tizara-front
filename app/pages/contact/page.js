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
      className='max-w-container px-[10px] mx-auto py-[50px] flex justify-center'
    >
      <div className="bg-primary-bg p-6 rounded-lg shadow-lg w-full md:w-[50%]">
        <h1 className="text-5xl font-semibold text-primary-green mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-gray-400" htmlFor="firstName">Name</label>
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
            <label className="text-gray-400" htmlFor="workEmail">Email</label>
            <input
              type="email"
              id="workEmail"
              name="workEmail"
              className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary- bg-transparent"
              required
              value={formData.workEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-400" htmlFor="workEmail">Email</label>
            <textarea rows="6" cols="100" className="w-full p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary- bg-transparent" placeholder="Messege">

            </textarea>
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