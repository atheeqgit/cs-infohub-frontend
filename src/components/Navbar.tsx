import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red-800  w-full flex flex-row justify-between items-center px-4 py-1">
      <div>
        <img className="w-20 h-20" src="/logo.png" alt="" />
      </div>
      {/* <ul className="flex flex-row gap-6 items-center capitalize transition font-semibold text-white mx-auto ">
    <li className="cursor-pointer hover:underline">Home</li>
    <li className="cursor-pointer hover:underline">about</li>
    <li className="cursor-pointer hover:underline">events</li>
    <li className="cursor-pointer hover:underline">gallery</li>
    <li className="cursor-pointer hover:underline">E-content</li>
  </ul> */}
    </nav>
  );
};

export default Navbar;
