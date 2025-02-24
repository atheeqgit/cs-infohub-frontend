import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Building2, ChevronRight, Search } from "lucide-react";
import axios from "axios";
import { SrcType } from "../types";
import { useGlobalContext } from "../context";
import LoadingScreen from "../components/LoadingScreen";

export interface DeptType {
  _id: string;
  pathName: string;
  deptIcon: SrcType;
  deptName: string;
  about: string[];
}

const EcontentLayout = () => {
  const { baseUrl, setLoading, loading } = useGlobalContext();

  const navigate = useNavigate();
  const [departmentData, setDepartmentData] = useState<null | DeptType[]>(null);

  useEffect(() => {
    getAllDepartments();
  }, []);

  const getAllDepartments = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `${baseUrl}/department/getAllDept` // Add protocol
      );
      setDepartmentData(response.data.data);
    } catch (err) {
      console.error("department Request failed:", err);
    } finally {
      setLoading(false);
    }
  };
  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-col">
            <h1 className="text-3xl font-bold text-gray-900">Departments</h1>
            <p className="mt-2 text-sm text-gray-700">
              Browse through our academic departments and their programs
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:flex-none">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search from all files"
                onClick={() => {
                  navigate("/e-content/search");
                }}
                className="block w-full rounded-md border-0 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departmentData?.map((department, index) => (
            <Link
              key={index}
              to={`/e-content/${department._id}/programs`}
              className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                    <Building2 className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {department.deptName}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {department.about[0].slice(0, 20)}
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

export default EcontentLayout;
