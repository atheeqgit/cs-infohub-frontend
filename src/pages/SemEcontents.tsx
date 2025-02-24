import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { File, Search, ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { useGlobalContext } from "../context";
import LoadingScreen from "../components/LoadingScreen";
import { EcontentType } from "../types";
import EcontentCard from "../components/EcontentCard";

const SemEcontents = () => {
  const { programId, semester } = useParams();
  const { baseUrl, setLoading, loading } = useGlobalContext();
  const [econtentData, setEcontentData] = useState<null | EcontentType[]>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContent = useMemo(() => {
    if (!searchQuery.trim()) return econtentData;

    const query = searchQuery.toLowerCase();
    return econtentData?.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.subjectCode.toLowerCase().includes(query)
    );
  }, [searchQuery, econtentData]);

  useEffect(() => {
    getAllEcontentByProgram();
  }, [programId, semester]);

  const getAllEcontentByProgram = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${baseUrl}/eContent/getAll-econtents/${programId}/${semester}` // Add protocol
      );
      setEcontentData(response.data.data);
    } catch (err) {
      console.error("econtent Request failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <LoadingScreen />
  ) : (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex-auto">
            <h1 className="text-3xl font-bold text-gray-900">Content</h1>
            <p className="mt-2 text-sm text-gray-700">
              Access your course materials and resources
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:flex-none">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search by title or subject code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-md border-0 py-2.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        {filteredContent?.length ? (
          <div className="mt-6 grid grid-cols-12 gap-6">
            {filteredContent.map((item) => (
              <EcontentCard Econtent={item} />
            ))}
          </div>
        ) : (
          <div className="w-full h-[80vh] flex justify-center items-center">
            <h1 className="large-text text-red-600 font-bold">
              No econtents available{" "}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default SemEcontents;
