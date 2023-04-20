import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toogle.toogleState);

  if (!isMenuOpen) return null;

  return (
    <div className="col-span-2 w-[30%]  p-6 bg-gray-50 flex flex-col">
      <div className="font-semibold flex-1">
        <ul className="pt-2">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul className="pt-2">
          <li>
            <a href="">Shorts</a>
          </li>
        </ul>
        <ul className="pt-2">
          <li>
            <a href="">Subscription</a>
          </li>
        </ul>
        <ul className="pt-2">
          <li>
            <a href="">Library</a>
          </li>
        </ul>
        <ul className="pt-2">
          <li>
            <a href="">History</a>
          </li>
        </ul>
      </div>
      {/* <div className="mt-3">
        <h1>Explore</h1>
      </div> */}
      <div className="justify-end  pt-4 text-xs">
        <h1 className=" py-[2px]"> TermsPrivacy </h1>
        <h1 className=" py-[2px]"> Policy & Safety </h1>
        <h1 className=" py-[2px]"> About Press Copyright </h1>
      </div>
    </div>
  );
};

export default Sidebar;
