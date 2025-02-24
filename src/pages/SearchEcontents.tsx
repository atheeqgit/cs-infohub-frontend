import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, SearchIcon, Filter, X } from "lucide-react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { EcontentType } from "../types";
import EcontentCard from "../components/EcontentCard";

interface Filters {
  semester: string;
  type: string;
}
// shift: string;
// department: string;
// program: string;

const SearchEcontents = () => {
  const { baseUrl } = useGlobalContext();
  // const pageNum = Number(pageNumber) || 1;

  const [totalEcontent, setTotalEcontent] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<EcontentType[]>([]);
  const [searchFilter, setSearchFilter] = useState<string>("title");

  const [filters, setFilters] = useState<Filters>({
    semester: "",
    type: "",
  });

  // shift: '',
  // department: '',
  // program: '',
  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    try {
      const response = await axios.get(
        `${baseUrl}/eContent/global-search/e-content?query=${searchQuery}&filter=${searchFilter}&pageNumber=1&limit=${limit}`
      );
      setSearchResults(response.data.data);
      // setShowFilters(response.data.data.length > 0);
    } catch (error) {
      console.error("Search failed:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };
  // const departments = [...new Set(searchResults.map(item => item.department))];
  // const programs = [...new Set(searchResults.map(item => item.program))];
  const semesters = [...new Set(searchResults.map((item) => item.semester))];
  // const shifts = [...new Set(searchResults.map(item => item.shift))];
  const types = [...new Set(searchResults.map((item) => item.type))];

  const filteredContent = searchResults.filter((item) => {
    // if (filters.department && item.department !== filters.department) return false;
    // if (filters.program && item.program !== filters.program) return false;
    if (filters.semester && item.semester !== parseInt(filters.semester))
      return false;
    // if (filters.shift && item.shift !== parseInt(filters.shift)) return false;
    if (filters.type && item.type !== filters.type) return false;
    return true;
  });

  const handleKeySubmit = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const resetFilters = () => {
    // department: '',
    // program: '',
    // shift: '',
    setFilters({
      semester: "",
      type: "",
    });
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-6">
          <div className="flex flex-col gap-2 md:gap-0 md:flex-row space-x-4">
            <div className="flex flex-row space-x-4 w-full">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                className="flex-1 relative"
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by title, subject code, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyUp={handleKeySubmit}
                  className="block w-full rounded-md border-0 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </form>

              <button
                type="submit"
                disabled={isLoading || !searchQuery.trim()}
                className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  isLoading || !searchQuery.trim()
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Searching...
                  </div>
                ) : (
                  "Search"
                )}
              </button>
            </div>
            <div className="flex flex-row space-x-4">
              <select
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onChange={(e) => {
                  setSearchFilter(e.target.value);
                }}
              >
                <option value="title" className="capitalize">
                  content Title
                </option>
                <option value="subjectName" className="capitalize">
                  subject Name
                </option>
                <option value="subjectCode" className="capitalize">
                  {" "}
                  subject Code
                </option>
                <option value="programName" className="capitalize">
                  Course Code
                </option>
              </select>

              {searchResults.length > 0 && (
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </button>
              )}
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Filters</h3>
                <button
                  onClick={resetFilters}
                  className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
                >
                  <X className="h-4 w-4 mr-1" />
                  Reset
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* <select
              value={filters.department}
              onChange={(e) => setFilters({ ...filters, department: e.target.value })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select> */}
                {/* 
            <select
              value={filters.program}
              onChange={(e) => setFilters({ ...filters, program: e.target.value })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">All Programs</option>
              {programs.map(prog => (
                <option key={prog} value={prog}>{prog}</option>
              ))}
            </select> */}

                <select
                  value={filters.type}
                  onChange={(e) =>
                    setFilters({ ...filters, type: e.target.value })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">All Types</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type.toUpperCase()}
                    </option>
                  ))}
                </select>

                <select
                  value={filters.semester}
                  onChange={(e) =>
                    setFilters({ ...filters, semester: e.target.value })
                  }
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">All Semesters</option>
                  {semesters.map((sem) => (
                    <option key={sem} value={sem}>
                      Semester {sem}
                    </option>
                  ))}
                </select>

                {/* <select
              value={filters.shift}
              onChange={(e) => setFilters({ ...filters, shift: e.target.value })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option value="">All Shifts</option>
              {shifts.map(shift => (
                <option key={shift} value={shift}>Shift {shift}</option>
              ))}
            </select> */}
              </div>
            </div>
          )}
        </div>

        <div className=" grid gap-6">
          {!searchQuery.trim() ? (
            <div className="text-center py-12">
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                Enter a search term
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Type something in the search box and click Search to find
                content.
              </p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                No results found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search query to find what you're looking for.
              </p>
            </div>
          ) : filteredContent.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="mt-2 text-sm font-semibold text-gray-900">
                No matching results
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-12 gap-6">
              {filteredContent.map((item) => (
                <EcontentCard Econtent={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchEcontents;

const Pagination = ({
  totalEcontents,
  pageNumber,
  progID,
}: {
  totalEcontents: number;
  pageNumber: number;
  progID: string | undefined;
}) => {
  const paginationCount = 2;
  const totalPages = Math.ceil(totalEcontents / 2); // Use Math.ceil to include extra items
  const startItem = (pageNumber - 1) * paginationCount + 1;
  const endItem = Math.min(pageNumber * paginationCount, totalEcontents);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{startItem}</span> to{" "}
            <span className="font-medium">{endItem}</span> of{" "}
            <span className="font-medium">{totalEcontents}</span> E-contents
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-xs"
            aria-label="Pagination"
          >
            {/* Previous Button */}
            <Link
              to={`/e-content/${progID}/1`}
              // onClick={() => onPageChange(pageNumber - 1)}
              // disabled={pageNumber === 1}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:opacity-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft className="size-5" aria-hidden="true" />
            </Link>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                to={pageNumber === page ? "#" : `/e-content/${progID}/${page}`}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                  page === pageNumber
                    ? "bg-indigo-600 text-white"
                    : "text-gray-900  ring-gray-300 ring-1 ring-inset hover:bg-gray-50"
                } focus:z-20`}
              >
                {page}
              </Link>
            ))}

            {/* Next Link */}
            <Link
              to={
                pageNumber === totalPages
                  ? "#"
                  : `/e-content/${progID}/${pageNumber + 1}`
              }
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:opacity-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="size-5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
