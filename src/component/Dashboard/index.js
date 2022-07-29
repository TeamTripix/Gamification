import "./style.scss";
import SideNavbar from "../SideNavbar";
import TopNavbar from "../TopNavbar";
import DashboardPage from "../DashboardPage";
const Index = () => {
  return (
    <>
      <div className="base">
        <SideNavbar />
        <div className="rightBase">
          <TopNavbar />
          <DashboardPage />
        </div>
      </div>
    </>
  );
};

export default Index;
