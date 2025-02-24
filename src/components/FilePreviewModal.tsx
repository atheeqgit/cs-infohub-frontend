import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface FilePreviewModalProps {
  files: { url: string; public_id: string }[];
  onClose: () => void;
  title: string;
}

const downloadFile = async (url: string, customName: string) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = customName; // Set custom name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};

const FilePreviewModal = ({ files, onClose, title }: FilePreviewModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentFile = files[currentIndex];

  const nextFile = () => {
    setCurrentIndex((prev) => (prev + 1) % files.length);
  };

  const prevFile = () => {
    setCurrentIndex((prev) => (prev - 1 + files.length) % files.length);
  };

  // Determine file type
  const isPDF = currentFile.url.endsWith(".pdf");
  const isImage = /\.(jpeg|jpg|png|gif|webp)$/.test(currentFile.url);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-2 rounded-lg shadow-lg w-[90vw] max-w-3xl relative">
        {/* Close Button */}

        {/* File Preview */}
        <div className="flex flex-col items-center">
          {isPDF ? (
            <iframe
              src={currentFile.url}
              className="w-full h-[500px] border rounded-md"
            />
          ) : isImage ? (
            <img
              src={currentFile.url}
              alt="Preview"
              className="w-full max-h-[500px] object-contain"
            />
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-gray-700">File preview not available.</p>
              <a
                href={currentFile.url}
                download
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Download File
              </a>
            </div>
          )}
        </div>

        {/* Navigation */}
        {files.length > 1 && (
          <div className="flex justify-between mt-4">
            <button
              onClick={prevFile}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="text-gray-700">
              <p>
                {currentIndex + 1} / {files.length}
              </p>
            </div>
            <button
              onClick={nextFile}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
        <div className="flex flex-row justify-center items-center text-lg tet-medium gap-3">
          <button
            onClick={onClose}
            className=" flex items-center px-3 py-1.5  font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 flex-row ga-2 cursor-pointer  "
          >
            Close preview
          </button>
          <button
            onClick={() => downloadFile(currentFile.url, title)}
            className="flex items-center px-3 py-1.5  rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Download File
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilePreviewModal;
