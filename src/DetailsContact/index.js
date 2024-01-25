import React from "react";
import { Link } from "react-router-dom";

const ContactDetail = ({ contact, onDelete }) => {
  return (
    <>
      <p className="flex justify-center items-center p-3 text-2xl font-bold text-red-800">
        Contact Details
      </p>
      <div className="flex justify-center items-center p-4 pt-4">
        <div className="grid grid-cols-2 justify-center items-center p-4 border-2 h-full w-96 shadow-md ">
          <div className="flex flex-col p-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqaVf19fpYB5yvTe8pvwxrZa_bsRK_Wb8V4Kbt3kHsA&s"
              alt=""
              srcset=""
              className="h-44 w-44"
            />
          </div>
          <div className=" flex flex-col">
            <p className="text-lg font-semibold p-2 text-gray-500">
              First Name: Tony
            </p>
            <p className="text-lg font-semibold p-2 text-gray-500">
              Last Name: Stark
            </p>
            <p className="text-lg font-semibold p-2 text-gray-500">
              Contact Number:936963751
            </p>
            <p className="text-lg font-semibold p-2 text-gray-500">
              Email Id:tony@gmai.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
