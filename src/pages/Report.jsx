import React from "react";
import SideBar from "../components/SideBar";
import Nav from "../components/Nav";
import player from "../assets/reports/Player.svg";
import reportsbgimg from "../assets/reports/reportsbg.png";
import PlayerData from "../components/PlayerData";
import { FaLocationDot } from "react-icons/fa6";
import Folder from "../components/Folder";

const Report = () => {
  return (
    <div>
      <div className="flex font-Poppins bg-[#f6f7fb] overflow-hidden">
        <div>
          <SideBar />
        </div>
        <div className="flex flex-col w-full">
          <div className="">
            <Nav />
          </div>
          <div className="w-full h-full flex flex-col gap-5 py-4 items-center">
            <div
              className="flex flex-wrap items-center justify-center rounded-2xl gap-2 py-4 px-3 "
              style={{
                backgroundImage: `url(${reportsbgimg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                maxWidth: "950px",
              }}
            >
              <div className="">
                <img className="" src={player} alt="" />
              </div>
              <div>
                <div className="font-semibold text-white">
                  <h2 className="text-[36px]">DAVID JONS</h2>
                  <div className="flex items-center gap-2">
                    {" "}
                    <span>
                      <FaLocationDot />
                    </span>{" "}
                    <span className="text-[26px] pb-2">Chicago City</span>
                  </div>
                </div>
                <div className="bg-white h-fit rounded-md md:px-2 px-9 py-3 ">
                  <div className="w-[250px]  flex gap-2 text-[#6A74C9] py-2">
                    <span className="border-2 text-[12px] py-1 h-[30px] rounded-sm border-[#6A74C9] w-full text-center">
                      BIO
                    </span>
                  </div>
                  <div className="text-[12px] flex flex-col gap-3">
                    <PlayerData info={"DOB"} info_val={"27 y"} />
                    <PlayerData info={"HEIGHT"} info_val={"6.2 in"} />
                    <PlayerData info={"FOOT"} info_val={"Right"} />
                    <PlayerData info={"PRIMARY POSITION"} info_val={"CN/RCB"} />
                    <PlayerData
                      info={"SECONDARY POSITION"}
                      info_val={"LCB/RB"}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white h-fit rounded-md md:px-2 px-9 py-3 text-[12px] sm:mt-[5rem] mt-3 flex flex-col gap-3">
                <div className="w-[250px]  flex gap-2 text-[#6A74C9] py-2">
                  <span className="border-2 h-[30px] rounded-sm border-[#6A74C9] w-full text-center py-1">
                    Character: 3 Months
                  </span>
                </div>
                <div className="w-[250px]  flex gap-0.5 text-[#6A74C9] ">
                  <span className="border-2 w-[70%] h-[30px] py-1 rounded-sm px-2 border-[#6A74C9]">
                    Attendence{" "}
                    <span className="text-[8px]">(games practice)</span>
                  </span>
                  <span className="w-[30%] border-2 h-[30px] py-1 rounded-sm pl-1 border-[#6A74C9]">
                    95%
                    <span className="text-[9px]">(36/12)</span>
                  </span>
                </div>
                <PlayerData info={"Avg Travel Distance"} info_val={"25 miles"} />
                <PlayerData info={"Extras Attended"} info_val={"09"} />
                <PlayerData info={"Socials Attended"} info_val={"02"} />
              </div>
            </div>
            <div>
              <h2 className="text-[#303030] text-[30px] py-4">Folders</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1  gap-5">
                <Folder title={"Offensive Organization"} date={"Jan 3, 2024, 09 am"}/>
                <Folder title={"Defensive Organization"} date={"Jan 3, 2024, 09 am"}/>
                <Folder title={"Offensive Transition"} date={"Jan 3, 2024, 09 am"}/>
                <Folder title={"Defensive Transition"} date={"Jan 3, 2024, 09 am"}/>
              </div>
            </div>

            <div>
              <h2 className="text-[#303030] text-[30px] py-4">Goals</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1  gap-5">
                <Folder title={"Daily Goals"} date={"Jan 3, 2024, 09 am"}/>
                <Folder title={"Weekly Goals"} date={"Jan 3, 2024, 09 am"}/>
                <Folder title={"Monthly Goals"} date={"Jan 3, 2024, 09 am"}/>
                <Folder title={"Yearly Goals"} date={"Jan 3, 2024, 09 am"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
