import react from "react";
import HamburgerIcon from "../assets/menu-icon.svg";
import YoutubeLogo from "../assets/YoutubeLogo.svg";
import ProfileIcon from "../assets/ProfileIcon.svg";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/toogleSlice";
const Header = () => {
  const dispatch = useDispatch();
  const toogleHamburgerHandler = () => {
    dispatch(toogleMenu());
  };
  return (
    <div className=" h-14  shadow-lg grid grid-flow-col ">
      <div className=" flex col-span-1 self-center">
        <img
          onClick={() => {
            toogleHamburgerHandler();
          }}
          className="cursor-pointer w-auto h-5 m-4"
          src={HamburgerIcon}
          alt=""
        />
        <img className=" w-28 " src={YoutubeLogo} alt="" />{" "}
      </div>
      <div className=" col-span-10 text-center self-center">
        <input className=" w-1/2  border" type="text" />
        <button className="p-1 pr-2 bg-black">🔍</button>
      </div>
      <div className="self-center">
        <img className=" h-10 col-span-1" src={ProfileIcon} alt="" />
      </div>
    </div>
  );
};
export default Header;
