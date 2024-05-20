// import required modules
import cards from "../../assets/Home_assests/cardsimg.png";
import SlickSlider from "../Slider/SlickSlider";

const team = [
  {
    id: 1,
    images: cards,
    name: "2002",
    text: "chicago",
  },
  {
    id: 2,
    images: cards,
    name: "2003",
    text: "chicago",
  },
  {
    id: 3,
    images: cards,
    name: "2004",
    text: "chicago",
  },
  {
    id: 4,
    images: cards,
    name: "2005",
    text: "chicago",
  },
  {
    id: 5,
    images: cards,
    name: "2015",
    text: "chicago",
  },
];
const OurteamLocation = () => {
  const styles = {
    borderTop: "1px solid",
    backgroundImage:
      "linear-gradient(283.4deg, #5BD6DD 23.54%, #036DED 70.28%)",
    backgroundClip: "border-box",
    backgroundOrigin: "border-box",
    border: "1px, 0px, 0px, 0px",
  };
  return (
    <div className="" id="location">
      <div className="flex flex-col items-center py-2">
      </div>
      <div className="">
        <SlickSlider team={team}/> 
      </div>
    </div>
  );
};

export default OurteamLocation;
