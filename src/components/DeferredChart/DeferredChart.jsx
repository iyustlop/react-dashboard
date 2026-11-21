import { lazy, Suspense, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "./DeferredChart.css";

// Solo registramos el tipo de gráfico que usa el dashboard (area/line) para
// evitar cargar el bundle completo de ApexCharts.
const ApexChart = lazy(async () => {
  await import("apexcharts/line");
  return import("react-apexcharts/core");
});

const supportsIntersectionObserver =
  typeof window !== "undefined" && "IntersectionObserver" in window;

const DeferredChart = ({ ariaLabel, options, series, type = "area" }) => {
  const containerRef = useRef(null);
  // Sin IntersectionObserver no hay nada que diferir: renderiza directamente.
  const [isVisible, setIsVisible] = useState(!supportsIntersectionObserver);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !supportsIntersectionObserver) return undefined;

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
