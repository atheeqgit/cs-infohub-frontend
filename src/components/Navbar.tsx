// import { NotebookIcon, NotebookTabs, NotepadTextDashed } from "lucide-react";
// import React from "react";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#eef1fa] px-4   w-full flex flex-row justify-between items-center ">
      <div className=" py-1">
        <img className="w-[40%] md:w-[20%]" src="/logo2.png" alt="" />
      </div>
      {/* <NavLink
        to="/e-content"
        className="flex flex-row gap-2 w-fit text-nowrap items-center px-3 py-1.5  rounded text-white bg-indigo-600 hover:bg-indigo-700"
      >
        <NotebookIcon /> E-content module
      </NavLink> */}
    </nav>
  );
};

export default Navbar;
