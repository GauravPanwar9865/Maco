import React, { useState } from "react";
import Navbar from "./Navbar";
import Box from "./carrrt/box";
import backgroundImage from "./dashboadbg.jpg";

const productData = [
  {
    id: 1,
    productName: "Clutch Plate",
    productImage:
      "https://cdn.discordapp.com/attachments/992120404338556988/1186006461185265775/p1_2.png?ex=6591ad97&is=657f3897&hm=6aa04dfd9ea59c21550622c00b331a1c732102b5b27189fd205d7f32eb3c3810&",
    subParts: ["Automotive Parts (Miscllaneous)"],
  },
  {
    id: 2,
    productName: "Brake Pad",
    productImage:
      "https://cdn.discordapp.com/attachments/992120404338556988/1186006460077973654/p1_4.png?ex=6591ad97&is=657f3897&hm=04eba179346bdbe5fda20438ab15e233705681d64cdc21069b988fd03c359619&",
    subParts: ["Hero Honda", "Honda", "TVS Motors", "Yamaha", "Bajaj Auto"],
  },
  {
    id: 3,
    productName: "Connecting Rod",
    productImage:
      "https://cdn.discordapp.com/attachments/992120404338556988/1186006460581281942/p1_3.png?ex=6591ad97&is=657f3897&hm=1fb591769ddbc0c1462f6adea97604e8f2330adde6c38d26abe7671ac4c2d962&",
    subParts: ["Three Wheelers", "Two Wheelers", "SubPart 3"],
  },
  {
    id: 4,
    productName: "Piston Pin",
    productImage:
      "https://cdn.discordapp.com/attachments/992120404338556988/1186006459318800525/p1_5.png?ex=6591ad96&is=657f3896&hm=312c72cab906b60ce0784ee07bd44bc1851d688cc54608385100515eaed1bb2d&",
    subParts: [
      "Car & Jeep",
      "Heavy Commercial Vehicle",
      "Stationary Diesel Engines",
      "Three Wheelers",
      "Two Wheelers",
      "Tractor",
      "Light Commercial Vehicle",
    ],
  },
  {
    id: 4,
    productName: "Brak Shoe",
    productImage:
      "https://cdn.discordapp.com/attachments/992120404338556988/1186006461562757204/p1_1.png?ex=6591ad97&is=657f3897&hm=ee7c4cfdf057abaeb5db4e73b6886d90ca6cc21f06d4e6056d0e4925e64af5ad&",
    subParts: ["Hero Honda", "Honda", "TVS", "Yamaha", "Bajaj"],
  },
  {
    id: 4,
    productName: "Crank Pin",
    productImage:
      "https://cdn.discordapp.com/attachments/992120404338556988/1186006459318800525/p1_5.png?ex=6591ad96&is=657f3896&hm=312c72cab906b60ce0784ee07bd44bc1851d688cc54608385100515eaed1bb2d&",
    subParts: ["Three Wheelers", "Two Wheelers"],
  },
  // Add more products as needed
];

function Cart() {
  const handleOrderNowClick = () => {
    // Handle order now logic
    console.log("Order Now clicked!");
  };

  return (
    <>
      <Navbar />

      <div
        // Background Image
        className="bg-cover bg-center "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div
          className="bg-cover bg-center "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="grid grid-cols-4 gap-4 ">
            {productData.map((product) => (
              <Box
                key={product.id}
                productName={product.productName}
                productImage={product.productImage}
                onOrderNowClick={handleOrderNowClick}
                subParts={product.subParts}
              />
            ))}
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

export default Cart;
