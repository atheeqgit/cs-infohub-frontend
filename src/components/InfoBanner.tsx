import React from "react";
interface InfoBannerProps {
  bannerTitle: string;
  bannerImg: string;
}

const InfoBanner = (props: InfoBannerProps) => {
  return (
    <div className="w-full h-[40vh] md:h-[50vh] relative z-[10]">
      <img
        src={props.bannerImg}
        className="w-full h-[40vh] md:h-[50vh] object-cover"
        alt="Department Banner"
      />
      <div className="section-px banner-overlay absolute top-0 left-0 w-full h-full flex flex-col md:flex-row justify-center items-start md:items-center">
        {/* Department Name */}
        <div className="w-full flex flex-col text-white justify-center items-center text-center">
          <h1 className="large-text uppercase font-bold">
            {props.bannerTitle}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
