import react, { useState, useEffect } from "react";
import HamburgerIcon from "../assets/menu-icon.svg";
import YoutubeLogo from "../assets/YoutubeLogo.svg";
import ProfileIcon from "../assets/ProfileIcon.svg";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/toogleSlice";
import { YOUTUBE_SEARCH_API } from "../constants/youtubeAPI";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => fetchSearchDetails(), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSearchDetails = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(suggestions);
  };

  //togglibng hamburger menu
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
        <h1 className="m-4 font-Poppins text-xl">VisionaryPlayer</h1>
      </div>
      <div className=" col-span-10 justify-center self-center">
        <div className="grid place-items-center">
          <div className="relative">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[30rem] border rounded-l-full pl-2"
              type="text"
            />
            <button className="pl-1 pr-4 bg-gray-100 rounded-r-full">🔍</button>
            <div className="absolute z-20 top-full left-0">
              <ul className="z-20 fixed over shadow-slate-400 rounded-full ">
                {suggestions.map((s) => (
                  <li className="w-[30rem] bg-white pb-[3px] pl-1 pt-1 border hover:cursor-default hover:bg-gray-200">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center col-span-1">
        <img className=" h-10 " src={ProfileIcon} alt="" />
      </div>
    </div>
  );
};
export default Header;
