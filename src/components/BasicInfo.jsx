import React from "react";
import { useState } from "react";

const BasicInfo = () => {
  const [basicData, setBasicData] = useState({
    name: "",
    title: "",
    email: "",
    linkedin: "",
    github: "",
    postcode: "",
    city: "",
    state: "",
    address: "",
    country: "",
  });

  const handleChange = (e) => {
    setBasicData({ ...basicData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(basicData);
  };

  return (
    <div>
        <h2 className="font-bold text-lg">Basic Info</h2>
      <form onSubmit={handleSubmit} action="">
        <div className="mx-auto w-3/4 justify-center border border-black items-center ">
          <div className="flex justify-center mt-8 ">
            <div className="flex w-full items-center">
              <label htmlFor="name" className=" py-4 mb-2 mx-3 font-medium ">
                Name{" "}
              </label>
              <input
                type="text"
                name="name"
                id="username"
                value={basicData.name}
                onChange={handleChange}
                className=" h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
              />
            </div>

            <div className="flex w-full items-center ">
              <label htmlFor="email" className=" py-4 mb-2 mx-3 font-medium ">
                Email{" "}
              </label>
              <input
                type="email"
                name="email"
                id="useremail"
                value={basicData.email}
                onChange={handleChange}
                className=" h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex ">
            <div className="flex w-full items-center">
              <label
                htmlFor="linkedin"
                className=" py-4 mb-2 mx-3 font-medium "
              >
                Linkedin{" "}
              </label>
              <input
                type="link"
                name="linkedin"
                id="linkedin"
                value={basicData.linkedin}
                onChange={handleChange}
                className=" h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
              />
            </div>

            <div className="flex w-full items-center">
              <label htmlFor="github" className=" py-4 mb-2 mx-3 font-medium ">
                Github{" "}
              </label>
              <input
                type="link"
                name="github"
                id="github"
                value={basicData.github}
                onChange={handleChange}
                className=" h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex w-full text-left">
            <label htmlFor="address" className=" mb-2 mx-3 font-medium">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={basicData.address}
              onChange={handleChange}
              className="block w-2/3 h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
            />
          </div>

          <div className="flex">
            <div className="flex w-full items-center">
              <label htmlFor="state" className="py-4 mb-2 mx-3 font-medium">
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                value={basicData.state}
                onChange={handleChange}
                className="h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
              />
            </div>

            <div className="flex w-full items-center">
              <label htmlFor="city" className="py-4 mb-2 mx-3 font-medium">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={basicData.city}
                onChange={handleChange}
                className="h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex">
            <div className="flex w-full items-center">
              <label htmlFor="postcode" className="py-4 mb-2 mx-3 font-medium">
                Postcode
              </label>
              <input
                type="text"
                name="postcode"
                id="postcode"
                value={basicData.postcode}
                onChange={handleChange}
                className="h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
              />
            </div>

            <div className="flex w-full items-center">
              <label htmlFor="country" className="py-4 mb-2 mx-3 font-medium">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                value={basicData.country}
                onChange={handleChange}
                className="h-8 px-4 py-2 bg-slate-100 border-black border rounded focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-center ">
            <button
            type="submit"
            className="bg-cyan-500 border rounded w-16 my-8 border-gray-500 color-white">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;
