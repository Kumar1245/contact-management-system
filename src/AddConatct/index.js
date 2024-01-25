import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddContact = () => {
  const handleChange = () => {};
  const HandleSubmit = () => {};
  return (
    <div className="flex justify-center items-center h-full scroll-m-0 ">
      <img
        src="https://www.zucol.in/assets/img/img/Logo_blue.png"
        alt=""
        srcset=""
        className="fixed w-full opacity-15 "
      />
      <div className="flex flex-col justify-center items-center p-4  w-[800px] h-full ">
        <p className="justify-center items-center p-2 text-xl font-bold font-sans text-red-400">
          Add The New Contact
        </p>
        <form
          onSubmit={HandleSubmit}
          className=" flex flex-col items-center shadow-md bg-white rounded-lg text-white pt-4 gap-5 p-4 h-96 border-l-0 rounded-l-none"
        >
          <div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-3 p-2">
                <TextField
                  id="first_name"
                  name="first_name"
                  value=""
                  onChange={handleChange}
                  label=" First Name"
                  variant="outlined"
                  type="text"
                  placeholder="First Name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="first_name"
                  name="first_name"
                  value=""
                  onChange={handleChange}
                  label=" Last Name"
                  variant="outlined"
                  type="text"
                  placeholder="Last Name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  value=""
                  onChange={handleChange}
                  id="mobile_no"
                  name="mobile_no"
                  label="Mobile No"
                  variant="outlined"
                  type="number"
                  placeholder="Enter Contact Number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  value=""
                  onChange={handleChange}
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  placeholder="Enter Email Address"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <button className="rounded-lg border px-2 bg-blue-500 text-white p-2">
                  Add Contact
                </button>
              </div>
              <div className="flex flex-col gap-3 p-2">
                {/* <select
                  className="border bg-white border-gray-400 p-4 text-gray-400 rounded"
                  id="country"
                  name="country"
                  onChange={(e) => {
                    handleChange(e.target.value);
                    // setId(e.target.value);
                  }}
                >
                  <option className="px-2 text-black" selected hidden disabled>
                    Select your country
                  </option>
                  <option value="">India</option>
                  <option value="">America</option>
                  <option value="">Japan</option>
                  <option value="">Britan</option>
                  {/* {countries?.map((i) => {
                    return (
                      <>
                        <img src={i.flag} alt="" />
                        <option

                          className="text-black"
                          key={`${i.id}`}
                          value={`${i.id} ${i.name}`}
                        >
                          {i.name}
                        </option>
                      </>
                    );
                  })} */}
                {/* </select>

                <select
                  className="border p-4 bg-white border-gray-400  text-gray-400 font-bold rounded"
                  id="state"
                  name="state"
                  onChange={(e) => {
                    handleChange(e.target.value);
                    // setIdState(e.target.value);
                  }}
                >
                  <option
                    className="px-2 font-bold text-gray-400"
                    selected
                    hidden
                    disabled
                  >
                    Select your State
                  </option>
                  <option value="">Uttar Pradesh</option>
                  <option value="">Bihar</option>
                  <option value="">Punjab</option>
                  <option value="">Haryana</option>
                  {/* {states.map((i) => {
                    return (
                      <option
                        className="text-black bg-white"
                        key={`${i.id}`}
                        value={`${i.id} ${i.state}`}
                      >
                        {i.state}
                      </option>
                    );
                  })} */}
                {/* </select> */}

                {/* <select
                  className="border p-4 bg-white border-gray-400  text-gray-400 rounded"
                  id="city"
                  name="city"
                  onChange={handleChange}
                >
                  <option
                    className="px-2 text-gray-400"
                    selected
                    hidden
                    disabled
                  >
                    Select your City
                  </option>
                  <option value="">jaipur </option>
                  <option value="">Gurgaon </option>
                  <option value="">Lucknow </option> */}
                {/* {cities.map((i) => {
                    return (
                      <option
                        className="!text-black bg-white"
                        key={`${i.id}`}
                        value={`${i.city}`}
                      >
                        {i.city}
                      </option>
                    );
                  })} */}
                {/* </select>  */}
                <TextField
                  id="role"
                  name="role"
                  value=""
                  onChange={handleChange}
                  label="Person Role"
                  variant="outlined"
                  type="text"
                  placeholder="Enter Person Role"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  // value={values.address}
                  onChange={handleChange}
                  id="address"
                  name="address"
                  label="Address"
                  variant="outlined"
                  type="text"
                  placeholder="Address"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  value=""
                  onChange={handleChange}
                  id="pincode"
                  name="pincode"
                  label="PinCode"
                  variant="outlined"
                  type="number"
                  placeholder="Enter pincode"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <TextField
                  value=""
                  onChange={handleChange}
                  id="date"
                  name="date"
                  label="Date"
                  variant="outlined"
                  type="date"
                  placeholder="Date of Reparing"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <button className="rounded-lg border px-2 bg-red-500 text-white p-2">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
