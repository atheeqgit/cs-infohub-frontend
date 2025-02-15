import React from "react";
import { useGlobalContext } from "../context";
import FacultyCard from "../components/FacultyCard";
const Faculty = () => {
  const { allFacultyData } = useGlobalContext();

  return (
    <div className="section-px section-py">
      <div className="grid grid-cols-3 gap-4 p-4">
        {allFacultyData?.map((faculty, index) => (
          <FacultyCard
            key={index} // ✅ Always add a unique key
            faculty={faculty}
          />
        ))}
      </div>
    </div>
  );
};

export default Faculty;
