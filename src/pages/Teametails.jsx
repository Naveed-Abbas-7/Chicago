import React from "react";
import SideBar from "../components/SideBar";
import Nav from "../components/Nav";
import player from "../assets/reports/Player.svg";
import reportsbgimg from "../assets/reports/reportsbg.png";
import { FaLocationDot } from "react-icons/fa6";
import videoimg from '../assets/reports/video.png'
import { FaCirclePlay } from "react-icons/fa6";
import DetailCard from "../components/DetailCard";
import Calender from "../components/Calender";
import { Link } from "react-router-dom";




const Teametails = () => {
  return (
    <div className="bg-[#f6f7fb]">
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div className="w-full">
          <div>
            <Nav />
          </div>
          <div> 
            <div className=" flex flex-col gap-8 items-center font-Poppins">
            <div
              className="flex flex-wrap justify-center items-center rounded-2xl lg:h-[440px]"
              style={{
                backgroundImage: `url(${reportsbgimg})`,
                backgroundPosition: "center",
                width:"90%", 
                backgroundSize: "cover",
                maxWidth: "950px",
              }}
            >
              <div className="">
                <img className="" src={player} alt="" />
              </div>
              <div className="text-white md:w-[50%] w-full flex flex-col justify-cent  items-center">
                <div>
                <h2 className="text-[48px] font-semibold">DAVID JONS</h2>
                <div className="flex items-center gap-[4rem]"><span className="text-[32px]">Player</span>
                <button className="rounded-full bg-white py-1 px-7 text-[#6A74C9] text-[20px] h-fit">Follow</button></div>
                <div className="flex gap-2 items-center pb-2"><div className="w-[11px] h-[14px]"><FaLocationDot/></div> <span className="text-[14px]">united states</span></div>
                <div>
                  <Link to={"/videopage"}>
                  <img src={videoimg} alt="" />
                  <div className="text-[56px] relative bottom-[8rem] left-[10rem] opacity-50 cursor-pointer">
                  <FaCirclePlay />
                  </div>
                  </Link>

                </div>
                </div>
                
              </div>
              <div className=" flex-wrap relative bottom-[23%] left-[5%] gap-3 md:flex hidden">
                  <DetailCard title={"Total Matches"} text={"27/"} minitext={"80"}/>
                  <DetailCard title={"Height"} text={"5.7"} minitext={"in"} />
                  <DetailCard title={"Av. Session Length"} text={"2m 34s"}/>
                  <DetailCard text={"64%"}/>
                  <DetailCard title={"Current Winning"} text={"86%"}/>
                  <DetailCard title={"Knowledge Gain"} text={"+34%"}/>
                </div>

              </div>

              <div className="w-[85%] flex justify-center">
              <Calender/>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teametails;
