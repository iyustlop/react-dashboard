const pointCount = 7;
const chartEnd = Date.now();
const chartDates = Array.from({ length: pointCount }, (_, index) =>
  new Date(chartEnd - (pointCount - 1 - index) * 4 * 60 * 60 * 1000).toISOString(),
);

/**
 * Shared ApexCharts config for the area charts.
 * Note: `toolbar` and `dropShadow` must live inside `chart` or ApexCharts ignores them.
 */
export const createAreaChartOptions = ({
  strokeColor = "#fff",
  fillColor = "#fff",
  showGrid = true,
  showYAxis = false,
  height = "auto",
} = {}) => ({
  chart: {
    type: "area",
    height,
    toolbar: { show: false },
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },
  },
  fill: {
    colors: [fillColor],
    type: "gradient",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    colors: [strokeColor],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: showGrid,
  },
  xaxis: {
    type: "datetime",
    categories: chartDates,
  },
  yaxis: {
    show: showYAxis,
  },
});
