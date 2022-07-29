import React from "react";
import "./style.scss";

function Index() {
  return (
    <>
      <div className="mainLeftCard">
        <div className="mainLeftCardBody">
          <div className="left">
            <span>Build by developers</span>
            <h2>Soft UI Dashboard</h2>
            <p>
              From colors, cards, typography to complex elements, you will find
              the full documentation.
            </p>
            <div className="readMore">
              <p>Read More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 12h16m-7-7l7 7l-7 7"
                />
              </svg>
            </div>
          </div>
          <div className="right">
            <img src="https://demos.creative-tim.com/soft-ui-dashboard/assets/img/illustrations/rocket-white.png"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
