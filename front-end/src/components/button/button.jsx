import React from "react";
import { Button } from "@material-tailwind/react";

export default function ButtonSimple({ label, onClick, className, type }) {
  return (
    <div className="flex items-center">
      <Button
        type={type}
        className={`items-center border font-bold text-center text-white ${className} rounded-lg`} 
        onClick={onClick}
      >
        <p className="my-1">
          {label}
        </p>
      </Button>
    </div>
  );
}

