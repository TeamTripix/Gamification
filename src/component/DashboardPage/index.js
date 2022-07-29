import React from "react";
import UpDownCard from "./UpDownCard";
import BlogCards from "./BlogCards"
import Chart from "./Chart"
import "./style.scss";

function Index() {
  const UpDownCardData = [
    {
      heading: "Today's Money",
      data: "$52,000",
      isPositive: true,
      percent: 52,
      logo: `<svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48">
      <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
        <path d="M28.772 24.667A4.001 4.001 0 0 0 25 22v-1h-2v1a4 4 0 1 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4a2 2 0 0 1 1.886 1.333a1 1 0 1 0 1.886-.666ZM23 24a2 2 0 1 0 0 4v-4Zm2 10a2 2 0 1 0 0-4v4Z" />
        <path d="M13.153 8.621C15.607 7.42 19.633 6 24.039 6c4.314 0 8.234 1.361 10.675 2.546l.138.067c.736.364 1.33.708 1.748.987L32.906 15C41.422 23.706 48 41.997 24.039 41.997S6.479 24.038 15.069 15l-3.67-5.4c.283-.185.642-.4 1.07-.628c.212-.114.44-.231.684-.35Zm17.379 6.307l2.957-4.323c-2.75.198-6.022.844-9.172 1.756c-2.25.65-4.75.551-7.065.124a25.167 25.167 0 0 1-1.737-.386l1.92 2.827c4.115 1.465 8.981 1.465 13.097.002ZM16.28 16.63c4.815 1.86 10.602 1.86 15.417-.002a29.255 29.255 0 0 1 4.988 7.143c1.352 2.758 2.088 5.515 1.968 7.891c-.116 2.293-1.018 4.252-3.078 5.708c-2.147 1.517-5.758 2.627-11.537 2.627c-5.785 0-9.413-1.091-11.58-2.591c-2.075-1.438-2.986-3.37-3.115-5.632c-.135-2.35.585-5.093 1.932-7.87c1.285-2.648 3.078-5.197 5.005-7.274Zm-1.15-6.714c.8.238 1.636.445 2.484.602c2.15.396 4.306.454 6.146-.079a54.097 54.097 0 0 1 6.53-1.471C28.45 8.414 26.298 8 24.038 8c-3.445 0-6.658.961-8.908 1.916Z" />
      </g>
    </svg>`,
    },
    {
      heading: "Today's Users",
      data: "2,400",
      isPositive: true,
      percent: 3,
      logo: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2ZM4 16a11.981 11.981 0 0 1 5-9.727V9a1 1 0 0 0 1 1h3.382a1 1 0 0 0 .894-.553L15 8h4v6h-5.764a1 1 0 0 0-.447.105l-3.236 1.619a1 1 0 0 0-.553.894v3.705a1 1 0 0 0 .629.929L14 23l.824 4.94A12.015 12.015 0 0 1 4 16Zm18 10.376V23l1.755-2.632a1.001 1.001 0 0 0 .138-.797L23 16v-3h4.605A11.901 11.901 0 0 1 22 26.376Z"/></svg>`,
    },
    {
      heading: "New Clients",
      data: "+3,465",
      isPositive: false,
      percent: 2,
      logo: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M4 3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h7.5v-.671a4.514 4.514 0 0 1-.242-.329H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2.468c.364.18.7.41 1 .678V5a2 2 0 0 0-2-2H4Zm14.5 8.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0ZM15 16c.925 0 1.785-.28 2.5-.758V18a.5.5 0 0 1-.8.4l-1.4-1.05a.5.5 0 0 0-.6 0l-1.4 1.05a.5.5 0 0 1-.8-.4v-2.758A4.478 4.478 0 0 0 15 16ZM5 6.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"/></svg>`,
    },
    {
      heading: "Sales",
      data: "$1,06,654",
      isPositive: true,
      percent: 5,
      logo: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"/><circle cx="10.5" cy="19.5" r="1.5" fill="currentColor"/><circle cx="17.5" cy="19.5" r="1.5" fill="currentColor"/></svg>`,
    },
  ];
  return (
    <>
      <div className="upDownCards">
        {UpDownCardData.map((data) => {
          return (
            <UpDownCard
            key={data.heading}
              heading={data.heading}
              value={data.data}
              isPositive={data.isPositive}
              percent={data.percent}
              logo={data.logo}
            />
          );
        })}
      </div>
      <BlogCards/>
      <Chart/>
    </>
  );
}

export default Index;
