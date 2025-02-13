import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { DepartmentType } from "./types";

interface GlobalContextType {
  departmentData: DepartmentType | null;
  loading: boolean;
  setDepartmentData: React.Dispatch<
    React.SetStateAction<DepartmentType | null>
  >;
}

export const Context = createContext<GlobalContextType | null>(null);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [departmentData, setDepartmentData] = useState<DepartmentType | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getDepartmentData();
  }, []);

  const getDepartmentData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/department/home/computer-science" // Add protocol
      );

      console.log(response.data);
      setDepartmentData({
        ...response.data.data.department,
        facultyData: response.data.data.facultyData,
        programsData: response.data.data.ProgramsData,
      });
    } catch (err) {
      console.error("department Request failed:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Context.Provider
      value={{
        departmentData,
        setDepartmentData,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
