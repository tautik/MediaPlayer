import react from "react";
import MainConrtainer from "./MainConrtainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <MainConrtainer />
    </div>
  );
};
export default Body;
