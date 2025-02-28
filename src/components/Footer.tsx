// import React from "react";
import { FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="bg-red-800 section-px section-py grid grid-cols-12 gap-4">
        <div className="col-span-12 flex flex-col md:items-center lg:items-left md:col-span-6 lg:col-span-3">
          <div className="hidden md:flex flex-1 justify-center items-center">
            <img
              className=" object-cover"
              src="/logo.png"
              alt="Department Logo"
            />
          </div>
        </div>

        <div className="col-span-12 flex flex-col md:items-center lg:items-left md:col-span-6 lg:col-span-2">
          <h1 className="text-xl text-white font-bold capitalize mb-4">
            Quick links
          </h1>
          <ul className="flex flex-col capitalize text-white ">
            <li className="footer-li">
              <FaChevronRight />
              about
            </li>
            <li className="footer-li">
              <FaChevronRight />
              faculty
            </li>
            <li className="footer-li">
              <FaChevronRight />
              infrastructure
            </li>
            <li className="footer-li">
              <FaChevronRight />
              careers
            </li>
          </ul>
        </div>
        <div className="col-span-12 flex flex-col md:items-center lg:items-left md:col-span-6 lg:col-span-2">
          <h1 className="text-xl text-white font-bold capitalize mb-4">
            Quick links
          </h1>
          <ul className="flex flex-col capitalize text-white ">
            <a href="#about" className="footer-li">
              <FaChevronRight />
              about
            </a>
            <a href="#programs" className="footer-li">
              <FaChevronRight />
              programs
            </a>
            <a href="#events" className="footer-li">
              <FaChevronRight />
              events
            </a>
            <a href="#faculty" className="footer-li">
              <FaChevronRight />
              faculty
            </a>
            <a href="#infrastructure" className="footer-li">
              <FaChevronRight />
              infrastructure
            </a>
            <a href="careers" className="footer-li">
              <FaChevronRight />
              careers
            </a>
          </ul>
        </div>
        <div className="col-span-12 flex flex-col md:items-center lg:items-left md:col-span-6 lg:col-span-4">
          <div className="bg-red-900 p-6 rounded-xl shadow-lg">
            <h1 className="text-xl text-white font-bold capitalize mb-4">
              Contact Us
            </h1>

            {/* Address */}
            <div className="flex flex-row gap-4 items-start mb-4">
              <div className="w-10 flex-shrink-0">
                <FaLocationDot className="text-white w-6 h-6" />
              </div>
              <a
                href="https://maps.app.goo.gl/2X5oK1C3wsuL37BW9"
                target="blank"
                className="text-white/90 text-base font-medium hover:text-yellow-400"
              >
                The New College, New No. #147, Old No. #87, Peter's Road,
                Royapettah, Chennai - 600014
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-row gap-4 items-center mb-4">
              <div className="w-10 flex-shrink-0">
                <IoMdMail className="text-white w-6 h-6" />
              </div>
              <a
                href="mailto:thenewcollege600014@gmail.com"
                className="text-white/90 text-base font-medium hover:text-yellow-400"
              >
                thenewcollege600014@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex flex-row gap-4 items-center">
              <div className="w-10 flex-shrink-0">
                <FaPhoneAlt className="text-white w-6 h-6" />
              </div>
              <a
                href="tel:+914428351269"
                target="blank"
                className="text-white/90 text-base font-medium hover:text-yellow-400"
              >
                (+91)-44-2835 1269
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-red-900 px-10 py-6 flex flex-row justify-center items-center">
        <p className="text-base text-white ">
          Copyright © 2025 - All Rights Reserved - The New College
        </p>
      </div>
    </>
  );
};

export default Footer;
