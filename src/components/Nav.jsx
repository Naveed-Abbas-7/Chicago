import React from "react";
import filter from "../assets/navbar_assets/Filter.svg";
import vector from "../assets/navbar_assets/Vector.svg";
import notification from "../assets/navbar_assets/Notification.svg";
import profile from "../assets/navbar_assets/profile.svg";

const Nav = () => {
  return (
    <div className="flex md:flex-row flex-col justify-around gap-4 bg-white py-3 w-full items-center font-Poppins" >
      <div>
        <button className="flex items-center bg-[#EFF2FB] p-2 rounded-xl w-[235px] gap-8 md:ml-0 ml-4">
          <img className="ml-3" src={filter} alt="" />
          <span className="text-[#ABAEB7] text-[18px]">Filters</span>
        </button>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <img src={vector} alt="" />
        </div>
        <div>
          <img src={notification} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <img src={profile} alt="" />
          <div className="flex flex-col">
            <span>Soccer Coach</span>
            <span className="text-[#ABAEB7]">abc@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
