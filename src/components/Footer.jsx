import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-between px-5 bg-blue-800 h-[90px] items-center text-white'>
      <div>
        <p className='text-sm'>© 2024 Manoj Company, Inc. All rights reserved.</p>
      </div>
      <div>
        <ul className='flex gap-5 text-xl'>
          <li>
            <Link to="" > <FaFacebook/></Link>
          </li>
          <li>
            <Link to="" > <FaInstagram/></Link>
          </li>
          <li>
            <Link to="" > <FaXTwitter/></Link>
          </li>
          <li>
            <Link to="" > <FaGithub/></Link>
          </li>
          <li>
            <Link to="" > <FaYoutube/></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer