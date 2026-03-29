import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({carts}) => {
  return (
    <div className='container mx-auto '>
      <div className="navbar">
        <div className="navbar-start">
          <div className="flex items-center gap-1 font-bold text-xl">
            <img className="w-10" src="/logo.png" /> Ai Hub
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-10 px-1 text-lg">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <div className="relative">
            <div className=" btn bg-yellow-200 rounded-full">
              <FaShoppingCart />
            </div>

            {/* Notification badge */}
            {carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                {carts.length}
              </span>
            )}
          </div>

          <a className="btn bg-red-500 rounded-full text-white">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;