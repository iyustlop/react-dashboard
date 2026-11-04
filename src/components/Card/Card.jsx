import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";
import { createAreaChartOptions } from "@data/chartOptions";

const expandedChartOptions = createAreaChartOptions({ height: "100%" });

const Card = ({ title, color, barValue, value, png, series }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard
          title={title}
          color={color}
          series={series}
          setExpanded={() => setExpanded(false)}
        />
      ) : (
        <CompactCard
          title={title}
          color={color}
          barValue={barValue}
          value={value}
          png={png}
          setExpanded={() => setExpanded(true)}
        />
      )}
    </LayoutGroup>
  );
};

function CompactCard({ title, color, barValue, value, png: Png, setExpanded }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setExpanded();
    }
  };

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
      onClick={setExpanded}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalle de ${title}`}
    >
      <div className="radialBar">
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
        <span>{title}</span>
      </div>
      <div className="detail">
        <Png aria-hidden="true" />
        <span>${value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ title, color, series, setExpanded }) {
  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
      layoutId={`expandableCard-${title}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} detail`}
    >
      <button type="button" className="closeButton" onClick={setExpanded} aria-label="Close">
        <UilTimes aria-hidden="true" />
      </button>
      <span>{title}</span>
      <div className="chartContainer">
        <Chart series={series} type="area" options={expandedChartOptions} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.shape({
    backGround: PropTypes.string.isRequired,
    boxShadow: PropTypes.string.isRequired,
  }).isRequired,
  barValue: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  png: PropTypes.elementType.isRequired,
  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(PropTypes.number).isRequired,
    }),
  ).isRequired,
};

export default Card;
