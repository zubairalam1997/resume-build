import React from "react";


const TextFields = ({label , ...props}) => {
   
  return (
    
    <div className="flex flex-col gap-5 w-full">
      {label && <label className="font-medium text-base">{label}</label>}
      <input
        type="text"
        className="border  border-gray-300 outline-none px-3 py-2 text-base rounded-md hover:border-gray-500 focus:border-blue-500"
        {...props}
      />
    </div>

    );
};

export default TextFields;
