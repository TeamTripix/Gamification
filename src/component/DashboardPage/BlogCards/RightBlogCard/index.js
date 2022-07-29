import React from "react";
import "./style.scss";

function Index() {
  return (
    <>
      <div className="mainRightCard">
        <div className="cardBody">
          <div className="cardBodyImage">
            <span></span>
            <div className="innerText">
              <h2>Work with the rockets</h2>
              <p>
                Wealth creation is an evolutionarily recent positive-sum game.
                It is all about who take the opportunity first.
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
