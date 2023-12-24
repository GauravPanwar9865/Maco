import React, { useState } from "react";

const PrimaryItem = ({ isModalOpen, closeModel, productName, subParts }) => {
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [value, setValue] = useState("");
  const [itemId, setItemId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [prize, setPrize] = useState(0);
  const [totalPrize, setTotalPrize] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const options = [
    { label: "abc", value: 1 },
    { label: "cde", value: 2 },
    { label: "fgh", value: 3 },
    { label: "hij", value: 4 },
    { label: "jlk", value: 5 },
    { label: "mno", value: 6 },
    { label: "pqr", value: 7 },
    { label: "stu", value: 8 },
  ];

  const items = [
    { itemId: 1, itemName: "aa", itemPrice: 350, itemSubitem: "xyz" },
    { itemId: 3, itemName: "cc", itemPrice: 350, itemSubitem: "xyz" },
    { itemId: 4, itemName: "dd", itemPrice: 350, itemSubitem: "xyz" },
    { itemId: 5, itemName: "ee", itemPrice: 350, itemSubitem: "xyz" },
    { itemId: 2, itemName: "bb", itemPrice: 350, itemSubitem: "xyz" },
    { itemId: 6, itemName: "ff", itemPrice: 350, itemSubitem: "xyz" },
    { itemId: 7, itemName: "gg", itemPrice: 350, itemSubitem: "xyz" },
    { itemId: 8, itemName: "hh", itemPrice: 350, itemSubitem: "xyz" },
    { itemId: 9, itemName: "ii", itemPrice: 350, itemSubitem: "xyz" },
    { itemId: 10, itemName: "jj", itemPrice: 350, itemSubitem: "xyz" },
  ];

  const handleOptionButtonClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSubItemClick = (subItem) => {
    setSelectedSubItem(subItem);
  };

  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  const handleItemIdChange = (e) => {
    setItemId(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleItemClick = (selectedOption) => {
    const selectedPrize = calculatePrize(selectedOption);
    setPrize(selectedPrize);

    const calculatedTotalPrize = selectedPrize * quantity;
    setTotalPrize(calculatedTotalPrize);

    setDropdownOpen(false);
  };

  const calculatePrize = (selectedOption) => {
    return selectedOption * 10;
  };

  const handleCheckout = () => {
    const newItem = {
      itemId: itemId,
      quantity: quantity,
      subItem: selectedSubItem,
      prize: prize,
      isChecked: false,
    };
    setSelectedItems([...selectedItems, newItem]);
    // Reset form fields
    setItemId("");
    setQuantity("");
    setSelectedSubItem(null);
    setValue("");
    setPrize(0);
    setTotalPrize(0);

    // Set showTable to true when checking out
    setShowTable(true);
  };

  const handleCheckboxChange = (index) => {
    const updatedItems = [...selectedItems];
    updatedItems[index].isChecked = !updatedItems[index].isChecked;

    const updatedTotalPrize = updatedItems.reduce(
      (total, item) =>
        total + (item.isChecked ? item.prize * item.quantity : 0),
      0
    );

    setTotalPrize(updatedTotalPrize);
    setSelectedItems(updatedItems);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-gray-100 w-[90%]">
        <div className="container mx-auto ">
          <div className="flex shadow-md my-1">
            <div className="w-3/4 bg-white px-10 py-5">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-3xl">{productName}</h1>
              </div>
              <div className="flex mt-1">
                <ul className="flex list-none p-0">
                  {subParts.map((subItem) => (
                    <li
                      key={subItem}
                      onClick={() => handleSubItemClick(subItem)}
                    >
                      <a
                        href="#_"
                        className="relative inline-block text-lg group mx-2 mt-2"
                      >
                        <span className="relative z-10 block px-5 py-3 overflow-hidden  font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                          <span className="absolute inset-0 w-full h-full px-5 py-3  rounded-lg bg-gray-50"></span>
                          <span className="absolute left-0 w-48 h-48 -ml-2 transition-all  duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                          <span className="relative">{subItem}</span>
                        </span>
                        <span
                          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                          data-rounded="rounded-lg"
                        ></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center mt-6 ">
                <div className="flex items-center">
                  <label
                    htmlFor="itemId"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Item ID:
                  </label>
                  <input
                    type="text"
                    id="itemId"
                    name="itemId"
                    value={itemId}
                    onChange={handleItemIdChange}
                    className="ml-1 border border-gray-300 rounded-md flex w-[50%]"
                  />
                </div>
                <div className="flex items-center">
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="ml-1 border border-gray-300 rounded-md flex w-[50%]"
                  />
                </div>
                <div className="flex items-center">
                  <h4 className="mr-2 ml-[-20%]">Select Sub Group</h4>
                  <select
                    className="form-select bg-white-100 rounded-md border-solid border-2 border-black-5000 "
                    onChange={handleSelect}
                    value={value}
                  >
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center">
                  <p>Prize: Rs {prize}</p>
                </div>
                <div className="flex items-center ml-8">
                  <p>Total Prize: Rs {totalPrize}</p>
                </div>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleItemClick(option.value)}
                          className="block px-4  text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div id="summary" className="w-1/3 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="border-t mt-8 flex">
                <button
                  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm mr-3 text-white uppercase w-full "
                  onClick={handleCheckout}
                >
                  Search
                </button>
                <button
                  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                  onClick={closeModel}
                >
                  CheckOut
                </button>
              </div>
            </div>
          </div>
          <div>
            {showTable && (
              <div className="border-t mt-8 flex">
                <table className="w-[90%] ml-[3%] border-collapse border border-gray-300">
                  <thead>
                    <tr>
                      <th className=""></th>
                      <th className="border border-gray-300">SR No.</th>
                      <th className="border border-gray-300">Item Id</th>
                      <th className="border border-gray-300">Item Name</th>
                      <th className="border border-gray-300">Prize</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr key={index}>
                        <td className="">
                          <input
                            type="checkbox"
                            checked={item.isChecked || false}
                            onChange={() => handleCheckboxChange(index)}
                          />
                        </td>
                        <td className="border border-gray-300">{index + 1}</td>
                        <td className="border border-gray-300">
                          {item.itemId}
                        </td>
                        <td className="border border-gray-300">
                          {item.itemName}
                        </td>
                        <td className="border border-gray-300">
                          {item.itemPrice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryItem;
