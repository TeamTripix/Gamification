import React from "react";
import RightBlogCard from "./RightBlogCard";
import LeftBlogCard from "./LeftBlogCard";
import "./style.scss"

function Index() {
  return (
    <>
      <div className="blogCardBoxes">
        <LeftBlogCard />
        <RightBlogCard />
      </div>
    </>
  );
}

export default Index;
