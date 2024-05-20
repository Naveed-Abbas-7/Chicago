// import required modules
import Slide1 from "../../assets/Home_assests/player1.svg";
import Slide2 from "../../assets/Home_assests/player2.svg";
import SlickSlider from "./SlickSlider";

const team = [
  {
    id: 1,
    images: Slide1,
    name: "Player 1",
    text: "Player@123",
  },
  {
    id: 2,
    images: Slide2,
    name: "Player 2",
    text: "Player@123",
  },
  {
    id: 3,
    images: Slide1,
    name: "Player 3",
    text: "Player@123",
  },
  {
    id: 4,
    images: Slide2,
    name: "Player 4",
    text: "Player@123",
  },
  {
    id: 5,
    images: Slide2,
    name: "Player 5",
    text: "Player@123",
  },
];
const Locations = () => {
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
        <SlickSlider team={team} />
      </div>
    </div>
  );
};

export default Locations;
