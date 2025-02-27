import React from "react";
import { FacultyType } from "../types";

interface FacultyCardProps {
  faculty: FacultyType;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ faculty }) => {
  return (
    <div className="group h-full col-span-3 mt-32 md:col-span-1 relative flex flex-col items-center">
      <div className="absolute top-[-25%] left-1/2 transform -translate-x-1/2 flex justify-center w-[160px] h-[160px]">
        <img
          className="border-4 w-full border-solid border-green-900 rounded-full object-cover"
          src={faculty.imgSrc.url}
          loading="lazy"
          alt=""
        />
      </div>

      <div className="bg-white border pt-20 border-solid border-[#ccc] rounded-xl flex-[0.7] flex flex-col w-full  px-4  gap-2 transition-all duration-300 group-hover:shadow-[7px_7px_0px_0px_rgba(170,17,23,1)]">
        <h1 className="small-text font-extrabold text-red-800 uppercase">
          {faculty.name}
        </h1>
        {/* <h3 className="text-lg font-bold text-[#166D00]">
                
              </h3> */}
        <div>
          <h3 className="text-md text-black/80 font-semibold capitalize">
            designation
          </h3>
          <p className="text-base text-black font-semibold mt-[-3px] ml-4">
            {faculty.designation}
          </p>
        </div>
        <div>
          <h3 className="text-md text-black/80 font-semibold capitalize">
            education
          </h3>
          <p className="text-base text-black font-semibold mt-[-3px] ml-4">
            {faculty.education}
          </p>
        </div>
        {/* <p className="underline mt-auto text-red-800">Know more</p> */}
      </div>
    </div>
  );
};

export default FacultyCard;
