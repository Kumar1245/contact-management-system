import React from "react";
const Home = () => {
  return (
    <div className=" h-full">
      <img
        src="https://www.zucol.in/assets/img/img/Logo_blue.png"
        alt=""
        srcset=""
        className="fixed w-full opacity-15 "
      />
      <div className="flex justify-center items-center p-4 text-lg font-bold top-30">
        {/* <img
          className=""
          src="https://www.zucol.in/assets/img/img/whyus.png"
          alt=""
          srcset=""
        /> */}
        <p className="flex absolute top-40 justify-center items-center p-4  lg:text-2xl text-lg text-red-400  rounded-md ">
          {" "}
          Welcome to Contact Management App
        </p>
        {/* <img
          className=""
          src="https://www.zucol.in/assets/img/img/whyus.png"
          alt=""
          srcset=""
        /> */}
      </div>
    </div>
  );
};
export default Home;
