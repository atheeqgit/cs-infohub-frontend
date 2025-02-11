import React from "react";

interface FacultyCardProps {
  imgSrc: string;
  name: string;
  designation: string;
  education: string;
  pdfSrc: string;
  //   shift: "shift1" | "shift2" | "both";
  //   showOnHome: boolean;
}

const FacultyCard: React.FC<FacultyCardProps> = ({
  imgSrc,
  name,
  designation,
  education,
  pdfSrc,
}) => {
  return (
    <div className="group col-span-3 mt-24 md:col-span-1 relative flex flex-col items-center">
      <div className="absolute top-[-40%] left-1/2 transform -translate-x-1/2 flex justify-center w-[160px] h-[160px]">
        <img
          className="border-4 w-full border-solid border-green-900 rounded-full object-cover"
          src={imgSrc}
          alt=""
        />
      </div>

      <div className="bg-white border border-solid border-[#ccc] rounded-xl flex-[0.7] flex flex-col w-full py-6 p-4 pt-18 gap-2 transition-all duration-300 group-hover:shadow-[7px_7px_0px_0px_rgba(170,17,23,1)]">
        <h1 className="small-text font-extrabold text-red-800 uppercase">
          {name}
        </h1>
        {/* <h3 className="text-lg font-bold text-[#166D00]">
                
              </h3> */}
        <div>
          <h3 className="text-md text-black/80 font-semibold capitalize">
            designation
          </h3>
          <p className="text-base text-black font-semibold mt-[-3px] ml-4">
            {designation}
          </p>
        </div>
        <div>
          <h3 className="text-md text-black/80 font-semibold capitalize">
            education
          </h3>
          <p className="text-base text-black font-semibold mt-[-3px] ml-4">
            {education}
          </p>
        </div>
        {/* <p className="underline mt-auto text-red-800">Know more</p> */}
      </div>
    </div>
  );
};

export default FacultyCard;
