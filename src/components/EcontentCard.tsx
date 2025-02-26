import React, { useState } from "react";
import { EcontentType } from "../types/deptTypes";
import { File, Eye, Download } from "lucide-react";
import FilePreviewModal from "./FilePreviewModal"; // Import modal

interface propTypes {
  Econtent: EcontentType;
}

const EcontentCard = ({ Econtent }: propTypes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        key={Econtent._id}
        className="bg-white col-span-12 md:col-span-6 lg:col-span-4 shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div className="p-4 flex flex-col gap-3 justify-center items-stretch">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600">
                {<File className="h-6 w-6" />}
              </span>
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center space-x-2">
                <h2 className="text-lg font-medium text-gray-900">
                  {Econtent.title}
                </h2>
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  {Econtent.subjectCode}
                </span>
              </div>
              {/* <p className="mt-1 text-sm text-gray-500">
                      {Econtent.description}
                      </p> */}
              <div className="mt-2 flex items-center text-sm text-gray-500 flex-wrap gap-2">
                <span>subject: {Econtent.subjectName}</span>
                <span>•</span>
                <span>Course: {Econtent.programName}</span>
                {/* <span>{Econtent.program}</span> */}
                <span>•</span>
                <span>Semester {Econtent.semester}</span>
                <span>•</span>

                <span>
                  Uploaded on{" "}
                  {new Date(Econtent.uploadedAt).toLocaleDateString()}
                </span>
                <span>•</span>
                <span className="uppercase">{Econtent.type}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center  justify-between gap-3">
            <span className="text-sm text-gray-600">
              Files count {Econtent.files.length}
            </span>

            {/* Preview Button (Opens Modal) */}
            <button
              onClick={() => openModal(1)}
              className="flex items-center px-3 py-1.5 text-xs font-medium rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              <Eye className="h-4 w-4 mr-1" />
              Preview
            </button>
          </div>
        </div>
        {/* File Preview Modal */}
        {isModalOpen && (
          <FilePreviewModal
            files={Econtent.files}
            onClose={() => setIsModalOpen(false)}
            title={Econtent.title}
          />
        )}
      </div>
    </>
  );
};

export default EcontentCard;
