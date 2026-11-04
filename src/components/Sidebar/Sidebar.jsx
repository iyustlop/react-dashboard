import { useState } from "react";
import "./Sidebar.css";
import Logo from "@assets/logo.svg";
import { SidebarData } from "@data/data";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="Workshop logo" />
        <span>
          WorkSh<span>o</span>p
        </span>
      </div>
      <nav className="menu" aria-label="Main navigation">
        {SidebarData.map((item, index) => (
          <button
            type="button"
            className={selected === index ? "menuItem active" : "menuItem"}
            key={item.heading}
            onClick={() => setSelected(index)}
            aria-current={selected === index ? "page" : undefined}
          >
            <item.icon aria-hidden="true" />
            <span>{item.heading}</span>
          </button>
        ))}
        <button type="button" className="menuItem" aria-label="Sign out">
          <UilSignOutAlt aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
