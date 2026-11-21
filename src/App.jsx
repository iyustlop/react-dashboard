import "./App.css";
import Sidebar from "@components/Sidebar/Sidebar";
import MainDash from "@components/MainDash/MainDash";
import RightSide from "@components/RightSide/RightSide";
import SectionView from "@components/SectionView/SectionView";
import { useState } from "react";

const sectionTitles = {
  dashboard: "Dashboard",
  orders: "Orders",
  customers: "Customers",
  products: "Products",
  analytics: "Analytics",
};

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const isDashboard = activeSection === "dashboard";

  return (
    <div className="App">
      <div className={`AppGlass${isDashboard ? "" : " AppGlass--singlePane"}`}>
        <Sidebar selectedSection={activeSection} onSelect={setActiveSection} />
        <MainDash title={sectionTitles[activeSection]}>
          <SectionView section={activeSection} />
        </MainDash>
        {isDashboard && <RightSide />}
      </div>
    </div>
  );
}

export default App;
