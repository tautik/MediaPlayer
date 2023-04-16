import React from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.toogle.toogleState);

  if (!isMenuOpen) return null;

  return (
    <div className="col-span-2 p-6 bg-gray-50">
      <div className="font-semibold">
        <ul className="pt-2">
          <li>
            <a href="">Home</a>
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
      <div className="">
        <h1>Explore</h1>
      </div>
    </div>
  );
};

export default Sidebar;
