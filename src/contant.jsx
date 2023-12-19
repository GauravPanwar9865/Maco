import React from "react";
import Navbar from "./Navbar";
import backgroundImage from "./dashboadbg.jpg";

function Contant() {
  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-screen pt-4 pr-4 font-abc flex flex-col md:flex-row"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1744.1846670983516!2d77.01343537642323!3d28.97594910783268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db000ddd548ff%3A0x658c8ce84390489a!2sMaco%20Private%20Limited!5e0!3m2!1sen!2sin!4v1702220943855!5m2!1sen!2sin"
          width="100%"
          height="510"
          style={{ border: "1px solid " }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="shadow-lg ml-4 rounded-lg mb-4 md:mr-4 md:mb-0 md:w-1/2"
        ></iframe>
        <div className="tracking-wider text-box flex ml-4 flex-col md:w-1/2 p-5 h-[70vh] bg-white rounded-lg shadow-2xl md:ml-4">
          <h1 className="text-center font-medium mb-4 md:text-left">
            MAP LOCATION
          </h1>
          <div className="flex flex-col">
            <h4 className="font-medium mt-2">REGD. HEAD OFFICE: </h4>
            <h4 className="mt-2">Location: Kundan Mansion 2A/3, Asaf Ali Road New Delhi-110002 (India)</h4>
            <h4 className="mt-2">Telp: +91 11 23263672, 23273274</h4>
            <h4 className="mt-2">Email: macoho@maco-india.com</h4>
          </div>
          <div className="flex flex-col mt-4">
            <h4 className="font-medium mt-2">WORK OFFICE: </h4>
            <h4 className="mt-2">Location: E-24 Industrial Area, Sonepat -131001 (Haryana) India</h4>
            <h4 className="mt-2">Telp: +91 130 2212520, 2212407</h4>
            <h4 className="mt-2">Email: maco@maco-india.com</h4>
          </div>
        </div>
      </div>
      

    </>
  );
}

export default Contant;
