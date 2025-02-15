import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#eef1fa]  w-full flex flex-row justify-between items-center ">
      <div className="px-4 py-1">
        <img className="w-[20%]" src="/logo2.png" alt="" />
      </div>
      {/* <div className=" w-[102%] flex p-4 h-full bg-red-800 flex-row gap-4">
        <p className="text-right">go to official site</p>
      </div> */}
    </nav>
  );
};

export default Navbar;
