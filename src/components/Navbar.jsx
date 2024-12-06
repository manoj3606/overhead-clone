import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navData = [
    {
      title: "Home",
      path: "/Home",
    },
    {
      title: "Past Work",
      path: "/Pastwork",
    },
    {
      title: "Services",
      path: "/Services",
    },
    {
      title: "Testimonials",
      path: "/Testimonials",
    },
    {
      title: "Contact Us",
      path: "/ContactUs",
    },
  ];
  return (
    <div>
      <nav className="bg-blue-800 flex justify-between ">
        <ul className="hidden md:flex gap-5 text-white ">
          {navData.map((item, index) => (
            <li className="px-4 py-3 hover:text-gray-300" key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <div className="bg-blue-800 md:hidden  p-1 w-full">
          {isMobileOpen ? (
            <IoMdClose
              className="text-3xl float-end  mr-3 text-white hover:scale-[1.2] cursor-pointer"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            />
          ) : (
            <IoMenu
              className="text-3xl float-end  mr-3 text-white hover:scale-[1.2] cursor-pointer"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            />
          )}

          <ul
            className={`flex flex-col items-center mt-8 ${
              isMobileOpen ? "block" : "hidden"
            } transition-transform delay-150`}
          >
            {navData.map((item, index) => (
              <li className="px-4 py-2 rounded-sm hover:bg-slate-100 hover:text-blue-400 w-full text-center transition duration-[0.5s]  text-white" key={index}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
