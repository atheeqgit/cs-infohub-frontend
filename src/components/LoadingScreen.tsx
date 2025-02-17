import React from "react";

const LoadingScreen = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center">
      <div className="w-[20vw]">
        <img
          src="/logo.png"
          alt="Loading Logo"
          style={{
            animation: "scale 1.5s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
