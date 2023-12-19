import React, { useState } from "react";
import Navbar from "../Navbar";





const CompletePage = () => {


  const [selectedTransport, setSelectedTransport] = useState("");

  const handleTransportSelect = (option) => {
    setSelectedTransport(option);  
  }

  return (
    <>
    <Navbar />
    
<div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Choose Your Mode of Transport</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => handleTransportSelect("Standard")}
          className={`${
            selectedTransport === "Standard" ? "bg-indigo-500 text-white" : ""
          } px-4 py-2 border rounded`}
        >
          Standard
        </button>
        <button
          onClick={() => handleTransportSelect("Express")}
          className={`${
            selectedTransport === "Express" ? "bg-indigo-500 text-white" : ""
          } px-4 py-2 border rounded`}
        >
          Express
        </button>
      </div>
    </div>


    
    </>
  );
};

export default CompletePage;
