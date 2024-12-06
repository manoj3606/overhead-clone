import React from "react";
import logo from "../assets/logo.webp";
import { IoIosCall } from "react-icons/io";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between p-6">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col items-center text-[10px] sm:text-xl">
          <p className="text-sm">Get in touch</p>
          <h2 className="flex gap-2 items-center">
            <IoIosCall /> <span>+977-9824841531</span>
          </h2>
          <p className="text-sm underline">
            <a href="#">netkingyadav@gmail.com</a>
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
