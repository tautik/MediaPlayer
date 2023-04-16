import React from "react";
import FilterList from "./FilterList";
import VideoContainer from "./VideoContainer";
const MainConrtainer = () => {
  return (
    <div className="col-span-11">
      <FilterList />
      <VideoContainer />
    </div>
  );
};

export default MainConrtainer;
