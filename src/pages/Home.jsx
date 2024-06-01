import React from "react";
import SideBar from "../components/SideBar";
import Nav from "../components/Nav";
import backgroundimg1 from "../assets/Home_assests/homebg1.png";
import Locations from "../components/Slider/Location";
import OurteamLocation from "../components/ourTeamSlider/OurteamLocation";
import exporticon from "../assets/Icons/Export.svg";
import addIcon from '../assets/Icons/wallet.svg'


const Home = () => {
  return (
    <div className="flex font-Poppins bg-[#f6f7fb] overflow-hidden">
      <div className="z-20">
        <SideBar />
      </div>
      <div className="w-full">
        <div className="">
          <Nav />
        </div>
        <div className="flex justify-center py-5">
          <div className="flex flex-col items-center gap-7 py-3 center w-full">
            <div
              style={{
                backgroundImage: `url(${backgroundimg1})`,
                width:"100%",
                height: "269px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                maxWidth: "870px",
              }}
              className="  "
            >
              <div className=" abcd w-full h-full ">
              <div className="h-full flex flex-col justify-center ml-7 ">
                <div className= "text-white text-[42px] py-3 z-10 font-semibold">
                  <h2 className="">CHICAGO</h2>
                  <h2>CITY</h2>
                </div>
                <button className="bg-[#6a74c9] px-5 py-2 w-fit text-white rounded-xl z-10">
                  Explore now
                </button>
              </div>
              </div>
            </div>
            <div className="bg-white px-4 rounded-xl py-4 flex flex-col items-center ">
            <div className="flex md:flex-row flex-col justify-between items-center gap-3 w-full">
                <div className="flex flex-col">
                  <span className="text-[18px] font-semibold py-2">Team Report</span>
                  <span className="text-[#737791] text-[14px]">Team Summery</span>
                </div>
                <button className="border-2 flex gap-2 h-fit items-center text-[14px] px-3 py-2 rounded-lg">
                  <img src={addIcon} alt="" />
                  <span>Add Team</span>
                </button >
              </div>
              <Locations />
            </div>

            <div className="bg-white  px-4 rounded-xl py-4 flex flex-col items-center">
            <div className="flex md:flex-row flex-col justify-between items-center gap-3 w-full">
                <div className="flex flex-col">
                  <span className="text-[18px] font-semibold py-2">Our Team</span>
                </div>
                <button className="border-2 flex gap-2 h-fit items-center text-[14px] px-3 py-2 rounded-lg">
                  <img src={exporticon} alt="" />
                  <span>Export</span>
                </button >
              </div>
              <OurteamLocation/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
