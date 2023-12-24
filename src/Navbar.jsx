// Navbar.js
import React from "react";
import logo from "./logo.png";
import { Link, useNavigate } from "react-router-dom";
import CompletePage from "./carrrt/placeorder";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    navigate("/?logout=" + Date.now());
  };

  const navigateToCart = () => {
    navigate("/carrt");
  };

  return (
    <div className="bg-zinc-800 p-2 font-bold">
      <nav className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-2 md:mb-0">
          <img src={logo} alt="Logo" className="logo h-14 w-auto p-0" />
          <h1 className="text-white font-bold xl:text-3xl xl:text-opacity-100 md:text-opacity-0 sm:text-4xl ml-2">MACO</h1>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-xl border-solid transform scaleY-1 transition duration-300 ">
          <Link to="/dashbord" className="text-white hover:border-t-2  hover:border-b-2   hover:border-red-400">
            DASHBOARD
          </Link>
          <Link to="/cart" className="text-white hover:border-t-2  hover:border-b-2  hover:border-red-400">
            ADD ITEM TO CART
          </Link>
          <Link to="/order" className="text-white hover:border-t-2  hover:border-b-2  hover:border-red-400">
            MANAGE ORDER
          </Link>
          <Link to="/track" className="text-white hover:border-t-2  hover:border-b-2  hover:border-red-400">
            TRACK SUPPLY
          </Link>
          <Link to="/contant" className="text-white hover:border-t-2  hover:border-b-2  hover:border-red-400">
            CONTACT
          </Link>
        </div>

        <div className="flex items-center mt-2">
          <button onClick={navigateToCart}>
            <a href="#">
              <img src="https://cdn.discordapp.com/attachments/992120404338556988/1186012313422147584/icons8-cart-48.png?ex=6591b30a&is=657f3e0a&hm=12d3e2d99c7ad4378d108a1cf07526c8d1d85bd2ae1999e607fd5d439207d15a&" alt="#" className="mr-4" />
            </a>
          </button>
          <button
            className="text-gray-100 bg-blue-400 hover:bg-red-500 focus:ring px-4 py-1 rounded-full cursor-pointer transition-all duration-100 ease-in-out font-bold text-xl transform "
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
