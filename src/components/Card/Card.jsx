import { useEffect, useRef, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
import { UilTimes } from "@iconscout/react-unicons";
import DeferredChart from "@components/DeferredChart/DeferredChart";
import PropTypes from "prop-types";
import { createAreaChartOptions } from "@data/chartOptions";

const expandedChartOptions = createAreaChartOptions({ height: "100%" });

const Card = ({ title, color, barValue, value, png, series }) => {
  const [expanded, setExpanded] = useState(false);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const wasExpanded = useRef(false);

  useEffect(() => {
    if (!expanded) {
      if (wasExpanded.current) triggerRef.current?.focus();
      wasExpanded.current = false;
      return undefined;
    }

    wasExpanded.current = true;
    dialogRef.current?.querySelector(".closeButton")?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setExpanded(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusableElements = dialogRef.current?.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [expanded]);

  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard
          title={title}
          color={color}
          series={series}
          setExpanded={() => setExpanded(false)}
          titleId={`card-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
          dialogRef={dialogRef}
        />
      ) : (
        <CompactCard
          title={title}
          color={color}
          barValue={barValue}
          value={value}
          png={png}
          setExpanded={() => setExpanded(true)}
          triggerRef={triggerRef}
        />
      )}
    </LayoutGroup>
  );
};

function CompactCard({ title, color, barValue, value, png: Png, setExpanded, triggerRef }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setExpanded();
    }
  };

  return (
    <motion.div
      className="CompactCard"
      ref={triggerRef}
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
      onClick={setExpanded}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalle de ${title}`}
      aria-haspopup="dialog"
      aria-expanded="false"
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

function ExpandedCard({ title, color, series, setExpanded, titleId, dialogRef }) {
  return (
    <>
      <div className="dialogBackdrop" aria-hidden="true" />
      <motion.div
        className="ExpandedCard"
        ref={dialogRef}
        style={{
          background: color.backGround,
          boxShadow: color.boxShadow,
        }}
        layoutId={`expandableCard-${title}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button type="button" className="closeButton" onClick={setExpanded} aria-label="Close">
          <UilTimes aria-hidden="true" />
        </button>
        <span id={titleId}>{title}</span>
        <div className="chartContainer">
          <DeferredChart
            ariaLabel={`${title} trend over the last 24 hours`}
            series={series}
            type="area"
            options={expandedChartOptions}
          />
        </div>
        <span>Last 24 hours</span>
      </motion.div>
    </>
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
