import React from "react";

interface titleTextProps {
  title: string;
  color?: string;
}

const TitleText = ({ title, color }: titleTextProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      {/* Vertical Red Bar */}
      <div className="h-full w-2 bg-red-800" aria-hidden="true"></div>

      {/* Heading */}
      <h1
        className={`${
          color ? color : "text-red-800"
        } text-3xl lg:text-4xl font-bold mb-4`}
      >
        {title}
      </h1>
    </div>
  );
};

export default TitleText;
