import "./MainDash.css";
import PropTypes from "prop-types";

const MainDash = ({ title, children }) => {
  return (
    <main className="MainDash">
      <h1>{title}</h1>
      {children}
    </main>
  );
};

MainDash.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MainDash;
