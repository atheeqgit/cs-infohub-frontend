import React from "react";
import { NavLink } from "react-router-dom";

interface NavLinkBtnProps {
  text: string;
  toLink: string;
}

const NavLinkBtn = ({ text, toLink }: NavLinkBtnProps) => {
  return (
    <NavLink to={toLink} className="w-fit ml-auto">
      <div
        className="p-3 px-4  rounded-xl capitalize font-semibold border border-solid bg-white text-center hover:bg-white/70 text-red-800  backdrop-blur-md cursor-pointer transition-all duration-300 hover:shadow-[5px_5px_0px_0px_rgba(170,17,23,1)]
  "
      >
        {text}
      </div>
    </NavLink>
  );
};

export default NavLinkBtn;
