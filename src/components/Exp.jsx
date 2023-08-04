import React, { useState } from "react";

const Exp = () => {
  const [expData, setExpData] = useState({
    positionTitle: "",
    companyName: "",
    certificationLink: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setExpData({ ...expData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expData);
  };

  return (
    <div>
      <h2 className="font-bold text-lg">Experience</h2>
      <form onSubmit={handleSubmit} action="">
        <div className="mx-auto w-3/4 justify-center border border-black items-center">
          <div className="flex justify-center mt-8">
            <div className="flex flex-col w-full items-center">
              <label htmlFor="positionTitle" className="py-4 mb-2 mx-3 font-medium">
                Position Title
              </label>
              <input
                type="text"
                name="positionTitle"
                id="positionTitle"
                value={expData.positionTitle}
                onChange={handleChange}
                className="h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full items-center">
              <label htmlFor="companyName" className="py-4 mb-2 mx-3 font-medium">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={expData.companyName}
                onChange={handleChange}
                className="h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex flex-col w-full items-center">
              <label htmlFor="startDate" className="py-4 mb-2 mx-3 font-medium">
                Start Date
              </label>
              <input
                type="text"
                name="startDate"
                id="startDate"
                value={expData.startDate}
                onChange={handleChange}
                className="h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col w-full items-center">
              <label htmlFor="endDate" className="py-4 mb-2 mx-3 font-medium">
                End Date
              </label>
              <input
                type="text"
                name="endDate"
                id="endDate"
                value={expData.endDate}
                onChange={handleChange}
                className="h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="bg-cyan-500 border rounded w-16 my-8 border-gray-500 color-white"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Exp;
