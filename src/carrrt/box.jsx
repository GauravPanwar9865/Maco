// Box.jsx

import React, { useState } from "react";
import PrimaryItem from "./primaryitem";

const Box = ({ productName, productImage, onOrderNowClick, subParts, subOptions }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSubItem, setSelectedSubItem] = useState(null);

  const handleOrderNowClick = () => {
    onOrderNowClick();
    setModalOpen(true);
  };

  const handleSubItemClick = (subItem) => {
    setSelectedSubItem(subItem);
  };

  const closeModel = () => {
    setModalOpen(false);
    setSelectedSubItem(null);
    window.alert("your order place successfully")
  };

  return (
    <div className="w-[70%] h-[81%] mt-10 mb-10 ml-10 bg-yellow-500 shadow-lg rounded-md overflow-hidden justify-between">
      <div className="bg-gray-200 text-center p-4">
        <h2 className="text-lg font-bold">{productName}</h2>
      </div>
      <div className="p-1 h-[69.5%]">
        <img src={productImage} alt={productName} className="w-[100%] h-[100%] object-cover" />
      </div>
      <div className="p-4 text-center mt-2 md:mt-7 bg-gray-200 flex justify-center items-center">
        <button
          className="bg-red-600 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          onClick={handleOrderNowClick}
        >
          Order Now
        </button>
        {isModalOpen && (
          <PrimaryItem
            isModalOpen={setModalOpen}
            selectedSubItem={selectedSubItem}
            subParts={subParts}
            subOptions={subOptions}
            closeModel={closeModel}
            productName={productName}
            onSubItemClick={handleSubItemClick}
          />
        )}
      </div>
    </div>
  );
};

export default Box;
