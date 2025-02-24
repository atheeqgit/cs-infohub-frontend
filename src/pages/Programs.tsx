import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GraduationCap, ChevronRight } from "lucide-react";
import axios from "axios";
import { useGlobalContext } from "../context";
import LoadingScreen from "../components/LoadingScreen";
import { ProgramType } from "../types";

export const Programs = () => {
  const { deptID } = useParams();

  const { baseUrl, setLoading, loading } = useGlobalContext();

  const [programsData, setProgramsData] = useState<null | ProgramType[]>(null);

  useEffect(() => {
    getAllPrograms();
  }, []);

  const getAllPrograms = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${baseUrl}/eContent/getAll-programs/${deptID}` // Add protocol
      );
      setProgramsData(response.data.data);
    } catch (err) {
      console.error("programs Request failed:", err);
    } finally {
      setLoading(false);
    }
  };
  // Filter programs by programs ID (will be replaced with API call)

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-bold text-gray-900">Programs</h1>
            <p className="mt-2 text-sm text-gray-700">
              Select a program to view its semesters and content
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programsData?.map((program) => (
            <Link
              key={program._id}
              to={`/e-content/${program._id}/${program.totalSemesters}`}
              className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {program.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {program.totalSemesters} semesters
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
