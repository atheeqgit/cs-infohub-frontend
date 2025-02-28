import { useState } from "react";
import { useGlobalContext } from "../context";
import FacultyCard from "../components/FacultyCard";

const Faculty = () => {
  const { allFacultyData } = useGlobalContext();

  const [filter, setFilter] = useState<string>("shift1");
  const changeFilter = (filt: string) => {
    setFilter(filt);
  };

  return (
    <div className="section-px section-py">
      {/* Dropdown for Filtering */}
      <div>
        <select
          onChange={(e) => changeFilter(e.target.value)}
          className="p-4 px-6 bg-white border-[#ccc] border border-solid rounded-xl "
        >
          <option className="p-2" value="shift1">
            Shift 1
          </option>
          <option className="p-2" value="shift2">
            Shift 2
          </option>
          <option className="p-2" value="all">
            All
          </option>
        </select>
      </div>

      {/* Faculty Grid */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {allFacultyData
          ?.filter(
            (faculty) =>
              filter === "all" ||
              faculty.shift === filter ||
              faculty.shift === "both"
          )
          .map((faculty, index) => (
            <FacultyCard key={index} faculty={faculty} />
          ))}
      </div>
    </div>
  );
};

export default Faculty;
