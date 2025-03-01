import React from "react";

interface InfrastructureCardProps {
  imgSrc: string;
  name: string;
  code: string;
  about: string[];
}

const InfrastructureCard: React.FC<InfrastructureCardProps> = ({
  imgSrc,
  name,
  code,
  about,
}) => {
  return (
    <div
      tabIndex={0}
      className={`relative mx-auto mb-10 cursor-pointer group col-span-2 md:col-span-1`}
    >
      <div className="relative w-full h-full border border-gray-500 overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 ">
        <img
          src={imgSrc}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105  group-focus:scale-105"
        />
        <div className="absolute inset-0 bg-white flex flex-col px-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 gap-2 transition-opacity duration-300 rounded-2xl text-left p-4 overflow-y-auto">
          <h3 className="medium-text font-semibold text-red-800">{name}</h3>
          <hr />
          {about.map((str, idx) => {
            return (
              <p key={idx} className="text-sm">
                {str}
              </p>
            );
          })}
        </div>
      </div>
      <div className="w-[85%] border border-solid p-1 md:p-3 text-center rounded-xl  backdrop-blur-md absolute bg-[#ffffff94] bottom-[-16%] md:bottom-[-12%] left-[6%] transition-all duration-300 group-hover:shadow-[7px_7px_0px_0px_rgba(170,17,23,1)] group-focus:shadow-[7px_7px_0px_0px_rgba(170,17,23,1)]">
        <h1 className="text-red-800 capitalize font-semibold text-xs md:text-lg">
          {name}
        </h1>
        <h3 className="text-red-800 capitalize text-xs md:text-lg">{code}</h3>
      </div>
    </div>
  );
};

export default InfrastructureCard;
