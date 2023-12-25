import React, { useState } from "react";

const PrimaryItem = ({ isModalOpen, closeModel, productName, subParts, subOptions }) => {
  const [selectedSubItem, setSelectedSubItem] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [itemId, setItemId] = useState("");
  const [stdQuantity, setStdQuantity] = useState(0);
  const [quantity001, setQuantity001] = useState(0);
  const [quantity002, setQuantity002] = useState(0);
  const [quantity003, setQuantity003] = useState(0);
  const [quantity004, setQuantity004] = useState(0);
  const [quantity005, setQuantity005] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [itemQuantities, setItemQuantities] = useState({});


  const handleTransportSelect = (option) => {
    setSelectedSubItem(option);
  };

  const itemsForThreeWheelers = [
    { itemId: 1, itemName: "RoadLink Connect", itemPrice: 350 },
    { itemId: 2, itemName: "NexusDrive", itemPrice: 350 },
    { itemId: 3, itemName: "Linkway Connect", itemPrice: 350 },
    { itemId: 4, itemName: "RouteHub", itemPrice: 350 },
    // ... (other items for three-wheelers)
  ];

  const itemsForTwoWheelers = [
    { itemId: 1, itemName: "MotoLink Connect", itemPrice: 350 },
    { itemId: 2, itemName: "RideLink Hub", itemPrice: 350 },
    { itemId: 3, itemName: "DuoTrail Link", itemPrice: 350 },
    { itemId: 4, itemName: "TwoWheel Nexus", itemPrice: 350 },
    // ... (other items for two-wheelers)
  ];

  const selectedItemsArray = selectedSubItem === "Three Wheelers" ? itemsForThreeWheelers : itemsForTwoWheelers;

  const options = [
    { label: "", value: 1 },
    { label: "", value: 2 },
    { label: "", value: 3 },
    { label: "", value: 4 },
    { label: "", value: 5 },
    { label: "", value: 6 },
    { label: "", value: 7 },
    { label: "", value: 8 },
  ];

  const handleOptionButtonClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleItemIdChange = (e, subItem) => {
    setSelectedSubItem(subItem);
    setItemId(e.target.value);
  };

  const handleQuantityChange = (e, type) => {
    const value = parseInt(e.target.value) || 0;

    switch (type) {
      case "std":
        setStdQuantity(value);
        break;
      case "001":
        setQuantity001(value);
        break;
      case "002":
        setQuantity002(value);
        break;
      case "003":
        setQuantity003(value);
        break;
      case "004":
        setQuantity004(value);
        break;
      case "005":
        setQuantity005(value);
        break;
      default:
        break;
    }
  };

  const calculateTotalPrice = () => {
    // Assuming a fixed price of 300 for each quantity
    const fixedPrice = 300;
    return (
      stdQuantity * fixedPrice +
      quantity001 * fixedPrice +
      quantity002 * fixedPrice +
      quantity003 * fixedPrice +
      quantity004 * fixedPrice +
      quantity005 * fixedPrice
    );
  };

  const handleCheckout = () => {
    const selectedItem = selectedItemsArray.find(item => item.itemId === parseInt(itemId));
    if (selectedItem) {
      const newItem = {
        itemId: selectedSubItem,
        stdQuantity: selectedItem.stdQuantity,
        quantity001: selectedItem.quantity001,
        quantity002: selectedItem.quantity002,
        quantity003: selectedItem.quantity003,
        quantity004: selectedItem.quantity004,
        quantity005: selectedItem.quantity005,
        totalPrize: calculateTotalPrice(selectedItem),
        isChecked: false,
      };
      setSelectedItems([...selectedItems, newItem]);
      setItemId("");
      setStdQuantity(0);
      setQuantity001(0);
      setQuantity002(0);
      setQuantity003(0);
      setQuantity004(0);
      setQuantity005(0);
      setShowTable(true);
    } else {
      // Handle item not found
      console.error("Item not found");
    }
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
              <div className="flex mt-4">
                <ul className="flex list-none p-0">
                  {subParts.map((subItem) => (
                    <li key={subItem} onClick={() => setSelectedSubItem(subItem)}>
                      <button
                        className={`${
                          selectedSubItem === subItem ? "bg-indigo-500 text-white" : ""
                        } px-4 py-2 border rounded`}
                        onClick={(e) => handleItemIdChange(e, subItem)}
                      >
                        {subItem}
                      </button>
                    </li>
                  ))}
                  {subOptions &&
                    subOptions.map((subOption) => (
                      <li key={subOption} onClick={() => setSelectedSubItem(subOption)}>
                        <button
                          className={`${
                            selectedSubItem === subOption ? "bg-indigo-500 text-white" : ""
                          } px-4 py-2 border rounded ml-5`}
                          onClick={(e) => handleItemIdChange(e, subOption)}
                        >
                          {subOption}
                        </button>
                      </li>
                    ))}
                </ul>
                <div className="flex items-center ml-24 text-xl">
                  <label
                    htmlFor="itemId"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Maco No:
                  </label>
                  <input
                    type="text"
                    id="itemId"
                    name="itemId"
                    value={itemId}
                    onChange={handleItemIdChange}
                    className="ml-1 border border-gray-300 rounded-md flex w-[60%]"
                  />
                </div>
              </div>
            </div>
            <div id="summary" className="w-1/3 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-12"></h1>
              <div className="border-t mt-4 flex">
                <button
                  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm mr-3 text-white uppercase w-full"
                  onClick={handleCheckout}
                >
                  Search
                </button>
                <button
                  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                  onClick={closeModel}
                  
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
          <div>
            {showTable && (
              <div className="border-t mt-2 flex">
                <table className="w-[90%] ml-[%] border-collapse w-full">
                  <thead>
                    <tr className="bg-slate-400">
                      <th className="px-8 py-2">Maco_No</th>
                      <th className="px-4 py-2">Item_Id</th>
                      <th className="px-4 py-2">Item Name</th>
                      <th className="px-4 py-2">STD</th>
                      <th className="px-4 py-2">001</th>
                      <th className="px-4 py-2">002</th>
                      <th className="px-4 py-2">003</th>
                      <th className="px-4 py-2">004</th>
                      <th className="px-4 py-2">005</th>
                      <th className="px-4 py-2">Total Price</th>
                      <th className="px-4 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedItemsArray.map((item, index) => (
                      <tr className="border-b text-center" key={index}>
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{item.itemId}</td>
                        <td className="px-4 py-2">{item.itemName}</td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={stdQuantity}
                            onChange={(e) => handleQuantityChange(e, "std")}
                            className="border border-gray-300 rounded-md w-[45%]"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={quantity001}
                            onChange={(e) => handleQuantityChange(e, "001")}
                            className="border border-gray-300 rounded-md w-[45%]"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={quantity002}
                            onChange={(e) => handleQuantityChange(e, "002")}
                            className="border border-gray-300 rounded-md w-[45%]"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={quantity003}
                            onChange={(e) => handleQuantityChange(e, "003")}
                            className="border border-gray-300 rounded-md w-[45%]"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={quantity004}
                            onChange={(e) => handleQuantityChange(e, "004")}
                            className="border border-gray-300 rounded-md w-[45%]"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <input
                            type="text"
                            value={quantity005}
                            onChange={(e) => handleQuantityChange(e, "005")}
                            className="border border-gray-300 rounded-md w-[45%]"
                          />
                        </td>
                        <td className="px-4 py-2">{calculateTotalPrice()}</td>
                        <td className="px-4 py-2"></td>
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
