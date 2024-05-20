import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import exporticon from "../../assets/Icons/Export.svg";
import addIcon from '../../assets/Icons/wallet.svg'


import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import IconsSvg from "../../assets/images/Locations/icons_svg.svg";
const SlickSlider = ({ team }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     initialSlide: 2,
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="">
        <ul className="flex justify-center items-center ">
          {dots}
          <li
            className="relative cursor-pointer text-white flex items-center justify-center custom-slick"
            onClick={next}
          >
            {/* <img className="" src={IconsSvg} alt="" /> */}

            {/* <FaChevronRight /> */}
          </li>
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-[10px] h-[10px] rounded-full bg-gradient-to-r from-[#036DED] to-[#5BD6DD] transition-all duration-300"></div>
    ),
  };
  return (
    <div className="slider-container">
      <div className="relative md:w-[600px] lg:w-[800px] w-[400px] ">
      
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {team.map((items, id) => (
            <div key={id}>
              <div className="grid lg:grid-cols-1 mx-4 lg:items-center ">
                <div className=" md:w-[170px] md:h-[180px] h-[350px] relative  overflow-hidden">
                  <img
                    className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                    src={items.images}
                    alt="img"
                  />
                  <div className="absolute inset-0 flex items-end">
                    <h2 className="text-white flex flex-col text-[16px] ml-5 mb-3">
                      {items.name}
                      <span className="text-[12px]">
                        {items.text}
                      </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div
          className="absolute sm:flex hidden gap-3 top-1/2  -right-0  bottom-1/2 justify-between -left-10 "
          style={{ textAlign: "center" }}
        >
          <div
            className=" relative left-9 bottom-5 cursor-pointer prev_btn text-white w-8 h-8 bg-gradient-to-r from-[#036DED] to-[#5BD6DD] rounded-full flex items-center justify-center"
            onClick={previous}
          >
            <FaChevronLeft />
          </div>
          <div
            className="relative bottom-5 cursor-pointer next_btn text-white w-8 h-8 bg-gradient-to-r from-[#036DED] to-[#5BD6DD] rounded-full flex items-center justify-center "
            onClick={next}
          >
            <FaChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlickSlider;
