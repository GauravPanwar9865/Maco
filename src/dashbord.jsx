import React from "react";
import Navbar from "./Navbar";

import backgroundImage from "./dashboadbg.jpg";

function DASHBOARD() {
  return (
    <>
      <Navbar />

      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
          <div className="w-full md:w-[calc(33.33%-16px)] mb-4 md:mb-0 md:mr-4">
            <div className="w-full h-48 md:h-64 bg-yellow-400 flex flex-col  overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:cursor-pointer hover:transform hover:scale-105">
              <a href="#">
                <h1 className="font-bold text-2xl md:text-3xl p-2 md:p-3 text-center">Pending Order</h1>
              </a>
              <h1 className="font-bold text-2xl md:text-3xl p-2 md:p-3 text-center">0</h1>
            </div>
          </div>

          <div className="w-full md:w-[calc(33.33%-16px)] mb-4 md:mb-0 md:mr-4">
            <div className="w-full h-48 md:h-64 bg-green-400 flex flex-col overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:cursor-pointer hover:transform hover:scale-105">
              <a href="#">
                <h1 className="font-bold text-2xl md:text-3xl p-2 md:p-3 text-center">Accepted Order</h1>
              </a>
              <h1 className="font-bold text-2xl md:text-3xl p-2 md:p-3 text-center">0</h1>
            </div>
          </div>

          <div className="w-full md:w-[calc(33.33%-16px)]">
            <div className="w-full h-48 md:h-64 bg-red-600 flex flex-col  overflow-hidden rounded-lg shadow-xl transition-transform duration-300 hover:cursor-pointer hover:transform hover:scale-105">
              <a href="#">
                <h1 className="font-bold text-2xl md:text-3xl p-2 md:p-3 text-center">Rejected Order</h1>
              </a>
              <h1 className="font-bold text-2xl md:text-3xl items-center justify-center p-2 md:p-3 text-center">0</h1>
            </div>
          </div>
        </div>
      </div>
      {/* ........................................................................... */}
      <div className="h-8 text-center bg-gray-200 text-gray-700 text-xl font-bold leading-1">
        Design by Bytebulls
      </div>
    </>
  );
}

export default DASHBOARD;
