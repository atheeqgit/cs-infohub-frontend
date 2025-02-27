import React from "react";
import { Link, useParams } from "react-router-dom";
import { CalendarDays, ChevronRight } from "lucide-react";

const Semesters = () => {
  const { programId, semesters } = useParams();

  const sems = semesters ? Number(semesters) : 0;

  const semArray = Array.from({ length: sems }, (_, i) => i + 1);
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-bold text-gray-900">Semesters</h1>
            <p className="mt-2 text-sm text-gray-700">
              Select a semester to view its content
            </p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {semArray.map((semester) => (
            <Link
              to={`/e-content/${programId}/sem/${semester}`}
              className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200 transition-colors">
                    <CalendarDays className="h-6 w-6" />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                    Semester {semester}
                  </h2>
                  <p className="text-sm text-gray-500">View content</p>
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

export default Semesters;
