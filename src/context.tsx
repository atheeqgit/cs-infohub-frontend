import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { DepartmentType, FacultyType, EventType } from "./types";

interface GlobalContextType {
  departmentData: DepartmentType | null;
  setDepartmentData: React.Dispatch<
    React.SetStateAction<DepartmentType | null>
  >;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  baseUrl: string;
  allFacultyData: FacultyType[] | null;
  setAllFacultyData: React.Dispatch<React.SetStateAction<FacultyType[] | null>>;
  allEventsData: EventType[] | null;
  setAllEventsData: React.Dispatch<React.SetStateAction<EventType[] | null>>;
}

export const Context = createContext<GlobalContextType | null>(null);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:8000/api";

  const [departmentData, setDepartmentData] = useState<DepartmentType | null>(
    null
  );
  const [allFacultyData, setAllFacultyData] = useState<FacultyType[] | null>(
    null
  );
  const [allEventsData, setAllEventsData] = useState<EventType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const ParamDeptId = "67adc0c65be1e403510ca338";

  useEffect(() => {
    getDepartmentData();
    getAllFacultyData();
    getAllEventsData();
  }, []);

  const getDepartmentData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/department/home/computer-science` // Add protocol
      );

      setDepartmentData({
        ...response.data.data.department,
        facultyData: response.data.data.facultyData,
        programsData: response.data.data.ProgramsData,
        eventsData: response.data.data.eventsData,
      });
    } catch (err) {
      setDepartmentData(null);
      console.error("department Request failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const getAllFacultyData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/department/getAllData/${ParamDeptId}/facultyData` // Add protocol
      );
      setAllFacultyData(response.data.facultyData);
    } catch (err) {
      console.error("department Request failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const getAllEventsData = async () => {
    try {
      const response = await axios.get(
        baseUrl + `/department/getAllData/${ParamDeptId}/eventsData` // Add protocol
      );
      setAllEventsData(response.data.eventsData);
    } catch (err) {
      console.error("department Request failed:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Context.Provider
      value={{
        baseUrl,
        departmentData,
        setDepartmentData,
        loading,
        setLoading,
        allFacultyData,
        setAllFacultyData,
        allEventsData,
        setAllEventsData,
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
