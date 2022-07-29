import React from "react";
import "./style.scss";

function Index() {
  return (
    <>
      <div className="leftChartBox">
        <div className="innerChartBox">

        </div>
        <div className="activeUserBox">
          <div className="activeUserHeading">
            <h2>Active Users</h2>
            <p>
              (<span>+23%</span>) than last week
            </p>
          </div>
          <div className="iconBoxs">
            <div>
              <div className="iconBoxItem">
                <div className="box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-6 2.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z"
                    />
                    <path
                      fill="currentColor"
                      d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z"
                    />
                  </svg>
                </div>
                <p>Users</p>
              </div>
              <h2>36K</h2>
            </div>

            <div>
              <div className="iconBoxItem">
                <div
                  className="box"
                  style={{
                    backgroundImage: "linear-gradient(310deg,#2152ff,#21d4fd)",
                  }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32">
                    <path
                      fill="currentColor"
                      d="M25.906 4c-.695 0-1.664.031-2.687.125c-2.047.191-4.41.535-5.875 2c-1.23 1.23-3.774 4.496-6.125 7.563c-.465.605-.446.593-.875 1.156l-1.719-.094a3.982 3.982 0 0 0-3.313 1.469L3.22 18.78l-1.031 1.313l1.624.312l3.282.657l3.843 3.843l.657 3.282l.344 1.625l1.28-1.032l2.563-2.093a3.982 3.982 0 0 0 1.469-3.313l-.094-1.688c.582-.44.563-.43 1.188-.906c3.074-2.355 6.351-4.883 7.562-6.093c1.453-1.454 1.778-3.852 1.969-5.907c.191-2.054.094-3.812.094-3.812l-.032-.907l-.906-.03S26.601 4 25.906 4zM25 6c.398 0 .68.023.969.031c.011.582.035 1.188-.094 2.563c-.176 1.894-.754 4.004-1.406 4.656c-.89.89-4.282 3.59-7.344 5.938a1031.119 1031.119 0 0 1-5.156 3.937l-3.063-3.063c.41-.55 1.813-2.464 3.875-5.156c2.344-3.054 5.051-6.457 5.969-7.375c.684-.683 2.77-1.261 4.656-1.437A18.28 18.28 0 0 1 25 6zm-4.563 3.531c-1.117 0-2 .914-2 2.031c0 1.118.883 2.032 2 2.032a2.037 2.037 0 0 0 2.032-2.031a2.037 2.037 0 0 0-2.032-2.032zM8.5 16.75l.375.031c-.602.797-1.586 2.074-1.719 2.25l-1.343-.281l1.03-1.25a2.002 2.002 0 0 1 1.657-.75zm-2.281 5.188c-.856.855-1.344 2.039-1.688 3.03c-.343.993-.5 1.813-.5 1.813L3.72 28.25l1.469-.281s.796-.137 1.78-.469c.985-.332 2.169-.824 3.063-1.719l-1.406-1.406c-.445.445-1.328.836-2.125 1.125c.305-.832.75-1.777 1.125-2.156zm9 1.187l.031.375a1.965 1.965 0 0 1-.719 1.656l-1.281 1.032l-.281-1.344c.176-.13 1.453-1.121 2.25-1.719z"
                    />
                  </svg>
                </div>
                <p>Clicks</p>
              </div>
              <h2>2m</h2>
            </div>

            <div>
              <div className="iconBoxItem">
                <div
                  className="box"
                  style={{
                    backgroundImage: "linear-gradient(310deg,#f53939,#fbcf33)",
                  }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 48 48">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="4">
                      <path d="M41 14L24 4L7 14v20l17 10l17-10V14Z" />
                      <path
                        stroke-linecap="round"
                        d="M24 22v8m8-12v12m-16-4v4"
                      />
                    </g>
                  </svg>
                </div>
                <p>Sales</p>
              </div>
              <h2>$235</h2>
            </div>

            <div>
              <div className="iconBoxItem">
                <div
                  className="box"
                  style={{
                    backgroundImage: "linear-gradient(310deg,#ea0606,#ff667c)",
                  }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16">
                    <path
                      fill="currentColor"
                      d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675l-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617l.968.968l-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96l2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46L4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242l.529.026l.287.445l.445.287l.026.529L5 13l-.242.471l-.026.529l-.445.287l-.287.445l-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471l.026-.529l.445-.287l.287-.445l.529-.026L3 11z"
                    />
                  </svg>
                </div>
                <p>Items</p>
              </div>
              <h2>43</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
