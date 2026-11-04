import { lazy, Suspense, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./DeferredChart.css";

const ApexChart = lazy(() => import("react-apexcharts"));

const DeferredChart = ({ ariaLabel, options, series, type = "area" }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="DeferredChart" role="group" aria-label={ariaLabel}>
      {isVisible ? (
        <Suspense
          fallback={
            <div className="chartLoading" role="status">
              Loading chart…
            </div>
          }
        >
          <ApexChart options={options} series={series} type={type} />
        </Suspense>
      ) : (
        <div className="chartLoading" aria-hidden="true" />
      )}
    </div>
  );
};

DeferredChart.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  series: PropTypes.array.isRequired,
  type: PropTypes.string,
};

export default DeferredChart;
