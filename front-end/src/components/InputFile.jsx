import React, { useRef, useState } from "react";

const InputFile = ({ label, onChange, placeholder }) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    const selectedFile = fileList[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      onChange(selectedFile);
    }
  };

  return (
    <div className="mb-4">
      <label htmlFor="file" className="block mt-5 text-xl font-bold text-custom-100">{label}</label>
      <div className="relative mt-1 flex">
        <button
          type="button"
          className="flex items-center px-6 font-bold py-2 bg-custom-100 hover:bg-custom-200 rounded-l-md text-white"
          onClick={handleButtonClick}
        >
          Pilih
        </button>
        <input
          type="file"
          id="file"
          className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
          ref={inputRef}
          onChange={handleFileChange}
          accept="image/*"
        />
        <input
          className={`block w-full rounded-r-md border-0 py-4 pl-4 pr-16 text-gray-900 ring-1 ring-inset ring-custom-200 placeholder:text-gray-300 font-bold ${
            fileName ? 'text-black' : 'text-gray-300'
          }`}
          placeholder={placeholder}
          value={fileName}
          readOnly
        />
      </div>
    </div>
  );
};

export default InputFile;
