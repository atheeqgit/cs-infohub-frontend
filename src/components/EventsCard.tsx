import React from "react";

interface EventCardProps {
  eventTitle: string;
  date: string;
  eventType: string;
  aboutEvent: string;
  imgSrc: string;
  imgType: string;
}
const EventsCard: React.FC<EventCardProps> = ({
  eventTitle,
  date,
  eventType,
  aboutEvent,
  imgSrc,
  imgType,
}) => {
  return (
    <div
      className={`relative mx-auto mb-10 cursor-pointer group  ${
        imgType === "Portrait"
          ? " col-span-2 md:col-span-3"
          : "col-span-2 md:col-span-6"
      }`}
    >
      {/* Image Container */}
      <div className=" relative w-full h-full border border-gray-500 overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 ">
        <img
          src={imgSrc}
          className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105  "
          alt={eventTitle}
        />

        {/* Hidden Card - Appears on Hover */}
        <div className="absolute inset-0 bg-white flex flex-col   px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl text-left p-4 py-6">
          <div className="flex flex-row justify-between items-center">
            <p className="text-lg font-semibold">{eventType} </p>
            <h3 className="text-sm font-semibold">{date}</h3>
          </div>
          <hr />
          <h3 className="mt-3 medium-text font-semibold text-red-800">
            {eventTitle}
          </h3>
          <p className="text-sm">{aboutEvent}</p>
        </div>
      </div>
      <div className="w-[85%] border border-solid p-4 text-center rounded-xl text-red-800 capitalize font-semibold backdrop-blur-md absolute bg-[#ffffff94] bottom-[-6%] left-[6%] transition-all duration-300 group-hover:shadow-[7px_7px_0px_0px_rgba(170,17,23,1)]">
        {eventTitle}
      </div>
    </div>
  );
};

export default EventsCard;
