import React from "react";
import "./style.scss";
import parse from 'html-react-parser'
function Index(props) {
  const {heading, value, isPositive, percent, logo} = props
  return (
    <>
      <div className="baseBody">
        <div className="cardItems">
          <div className="cardText">
            <p>{heading}</p>
            <div className="price">
              <h2>{value}</h2>
              <span className={isPositive?"green" : "red"}>{isPositive ? "+":"-"}{percent}%</span>
            </div>
          </div>
          <div className="cardBox">
            {parse(`${logo}`)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
