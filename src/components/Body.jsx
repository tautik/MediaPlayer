import react from "react";
import MainConrtainer from "./MainConrtainer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar className="col-span-1" />
      <Outlet className="col-span-11" />
    </div>
  );
};
export default Body;
