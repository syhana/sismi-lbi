import React, { useState } from "react";

const InputPass = ({ name, label, placeholder, value, onChange, className, disabled, classDiv}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`mb-4 w-full ${classDiv}`}>
      <label htmlFor="input" className={`block mt-5 text-base ${className}`}>
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm w-full">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          className="block w-full rounded-md border-0 py-4 pl-4 text-gray-900 ring-1 ring-inset ring-custom-200 placeholder:text-gray-300 font-semibold required:border-red-500"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 mr-4"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <img src="/hide-pass.svg" alt="Hide Password" className="h-7 w-7" />
          ) : (
            <img src="/show-pass.svg" alt="Show Password" className="h-7 w-7" />
          )}
        </button>
      </div>
    </div>
  );
};

export default InputPass;
