import React from "react";
import logo from "../assets/Icons/sidebarlogo.svg";
import home from "../assets/Icons/Home.svg";
import people from "../assets/Icons/people.svg";
import report from "../assets/Icons/Report.svg";
import setting from "../assets/Icons/Settings.svg";
import logout from "../assets/Icons/Logout.svg";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [open, setopen] = useState(true);

  const handleClick = () => {
    setopen(!open);
  };
  return (
    <>
      <div className="text-[32px] fixed z-[99] left-3 top-3 md:hidden block">
        <FiMenu onClick={handleClick} className="md:hidden" />
      </div>
      <div
        className={`fixed md:relative transition-all ease-in delay-350  flex justify-center w-[145px] bg-[#A2C7E4]  rounded-e-3xl ${
          open ? " left-0 z-[10] h-screen" : "left-[-50%]"
        }`}
      >
        <div className=" flex flex-col justify-around md:mt-0 mt-7">
          <div className="cursor-pointer">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-col gap-9">
            <div className="cursor-pointer">
              <Link to={"/"}>
                <img src={home} alt="" />
              </Link>
            </div>

            <div className="cursor-pointer">
              <Link to={"/MyTeam"}>
                <img src={people} alt="" />
              </Link>
            </div>
            <div className="cursor-pointer">
              <Link to={"/Report"}>
                <img src={report} alt="" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <div className="cursor-pointer">
              <Link to={"/teamdetails"}>
              <img src={setting} alt="" />
              </Link>
            </div>
            <div className="cursor-pointer">
              <img src={logout} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
