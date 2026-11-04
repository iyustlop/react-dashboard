import "./Sidebar.css";
import Logo from "@assets/logo.svg";
import { SidebarData } from "@data/data";
import PropTypes from "prop-types";

const Sidebar = ({ selectedSection, onSelect }) => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="Workshop logo" />
        <span>
          WorkSh<span>o</span>p
        </span>
      </div>
      <nav className="menu" aria-label="Main navigation">
        {SidebarData.map((item) => (
          <button
            type="button"
            className={selectedSection === item.id ? "menuItem active" : "menuItem"}
            key={item.id}
            onClick={() => onSelect(item.id)}
            aria-current={selectedSection === item.id ? "page" : undefined}
          >
            <item.icon aria-hidden="true" />
            <span>{item.heading}</span>
          </button>
        ))}
      </nav>
      <p className="demoNotice">Local demo</p>
    </div>
  );
};

Sidebar.propTypes = {
  selectedSection: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Sidebar;
