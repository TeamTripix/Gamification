import React from "react";
import LeftChart from "./LeftChart";
import RightChart from "./RightChart";
import "./style.scss"
function Index() {
  return (
    <>
      <div className="chartBox">
        <LeftChart />
        <RightChart />
      </div>
    </>
  );
}

export default Index;
