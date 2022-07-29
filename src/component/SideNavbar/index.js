import React from "react";
import "./style.scss";
function Index() {
  return (
    <>
      <div className="sideBar">
        <div className="cross disabled">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 64 64">
            <path
              fill="currentColor"
              d="M62 10.571L53.429 2L32 23.429L10.571 2L2 10.571L23.429 32L2 53.429L10.571 62L32 40.571L53.429 62L62 53.429L40.571 32z"
            />
          </svg>
        </div>
        <div className="logoTitleBox">
          <div className="logoTitle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 256 256">
              <path
                fill="#112B49"
                d="M160.227 178.519h27.63L143.75 64.049h-30.549l-44.107 114.47h27.632l7.208-19.39h41.675l-7.544-21.456h-27.44l17.85-49.254l31.752 90.1Zm91.112-84.751a6.641 6.641 0 0 0-8.185-4.627a6.648 6.648 0 0 0-4.628 8.183A114.646 114.646 0 0 1 242.704 128c0 63.248-51.456 114.702-114.704 114.702c-63.248 0-114.703-51.454-114.703-114.702C13.297 64.751 64.752 13.296 128 13.296c26.793 0 52.718 9.518 73.179 26.456a15.938 15.938 0 0 0-1.238 6.173c0 8.835 7.162 15.997 15.997 15.997s15.997-7.162 15.997-15.997s-7.162-15.997-15.997-15.997c-1.701 0-3.338.271-4.876.763C188.022 11.056 158.513 0 128 0C57.421 0 0 57.42 0 128c0 70.579 57.421 127.999 128 127.999c70.579 0 128-57.42 128-127.999a127.95 127.95 0 0 0-4.661-34.232Z"
              />
            </svg>
            <p>Dashboard</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="sidebarElements">
          <div className="element-active">
            <div className="logoBox">
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
                  d="m2 13l9.293-9.293a1 1 0 0 1 1.414 0L22 13h-2v8a1 1 0 0 1-1 1h-5v-7h-4v7H5a1 1 0 0 1-1-1v-8H2Z"
                />
              </svg>
            </div>
            <p>Dashboard</p>
          </div>
          <div className="element">
            <div className="logoBox">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M13 10v11H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5h-8Zm-2 0H5v4h6v-4Zm0 9v-3H5v3h6Zm2-14v3h6V5h-6Zm-2 0H5v3h6V5Z"/><path fill="currentColor" d="M19 21v-3h-3v-2h3v-3h2v3h3v2h-3v3h-2Z"/></svg>
            </div>
            <p>Tables</p>
          </div>

          <div className="element">
            <div className="logoBox">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"><path fill="currentColor" d="M14.551 11.92a4.837 4.837 0 0 0 4.837-4.839a4.837 4.837 0 1 0-9.674 0a4.84 4.84 0 0 0 4.837 4.839zm36.302-.068a4.916 4.916 0 0 0 4.915-4.914a4.913 4.913 0 1 0-9.827 0a4.912 4.912 0 0 0 4.912 4.914zM12.764 39.458c-6.36 0-11.516 5.155-11.516 11.515s5.156 11.516 11.516 11.516S24.28 57.333 24.28 50.973c0-6.359-5.156-11.515-11.516-11.515zm1.365 18.825v1.84h-2.753v-1.84c-2.936-.336-4.809-3.131-4.809-4.958h2.935c0 .821.633 1.912 1.901 2.173v-3.45c-.633-.122-.987-.222-1.666-.408c-1.735-.479-2.936-1.94-2.936-3.802c0-1.845 1.801-3.915 4.576-4.282v-1.719h2.753v1.719c2.943.379 4.753 2.553 4.753 4.726l-2.875-.001c-.002-.95-.792-1.813-1.878-1.919v3.236c.799.176.799.156 1.533.356c2.738.745 3.355 2.537 3.355 4.04c-.001 2.308-1.846 3.892-4.889 4.29z"/><path fill="currentColor" d="M11.376 49.092c-1.23-.219-1.571-.745-1.571-1.313c0-.663.834-1.302 1.571-1.388v2.701zm2.786 6.393v-2.916c1.215.174 1.985.697 1.985 1.448c0 .664-.717 1.42-1.985 1.468zM8.238 20.3h1.907l-2.204 8.203H21.16L18.956 20.3h1.907l2.259 8.203h4.253l-2.729-9.95c-.728-2.406-3.109-4.959-6.229-4.959h-7.736c-3.123 0-5.503 2.552-6.232 4.959l-2.726 9.95h4.253L8.237 20.3z"/><path fill="currentColor" d="M56.104 13.545a4.372 4.372 0 0 1 4.373 4.369l-.007 13.414h2.815v5.499l-5.696.003v22.774c0 1.592-1.306 2.883-2.899 2.883a2.884 2.884 0 0 1-2.881-2.883V36.832h-1.837v22.772a2.885 2.885 0 0 1-2.886 2.883a2.894 2.894 0 0 1-2.895-2.883v-22.77l-42.945.013v-5.519h42.945V18.413l-9.174 10.862c-1.93 2.229-5.367-.555-3.43-2.939l9.506-11.421c.615-.612 1.166-1.37 3.436-1.37h11.573z"/></svg>
            </div>
            <p>Billing</p>
          </div>

          <div className="element">
            <div className="logoBox">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M20.69 4.05C18.66 4.73 15.86 5.5 12 5.5c-3.89 0-6.95-.84-8.69-1.43A.993.993 0 0 0 2 5.02V19c0 .68.66 1.17 1.31.95C5.36 19.26 8.1 18.5 12 18.5c3.87 0 6.66.76 8.69 1.45A.999.999 0 0 0 22 19V5c0-.68-.66-1.16-1.31-.95zm-3.41 11.21A55.23 55.23 0 0 0 12 15c-1.87 0-3.63.1-5.28.27a.5.5 0 0 1-.43-.82l2.5-3c.2-.24.57-.24.77 0l1.62 1.94l2.44-2.93c.2-.24.57-.24.77 0l3.32 3.99c.28.34.01.86-.43.81z"/></svg>
            </div>
            <p>Virtual Reallity</p>
          </div>

          <div className="element">
            <div className="logoBox">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z"/></svg>
            </div>
            <p>Profile</p>
          </div>

          <div className="element">
            <div className="logoBox">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"/><path d="M20 12H7l3-3m0 6l-3-3"/></g></svg>
            </div>
            <p>Sign In</p>
          </div>

          <div className="element">
            <div className="logoBox">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4l-5 4z"/></svg>
            </div>
            <p>Sign Up</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
