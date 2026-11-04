const chartDates = [
  "2023-01-19T00:00:00.000Z",
  "2023-01-19T01:30:00.000Z",
  "2023-01-19T02:30:00.000Z",
  "2023-01-19T03:30:00.000Z",
  "2023-01-19T04:30:00.000Z",
  "2023-01-19T05:30:00.000Z",
  "2023-01-19T06:30:00.000Z",
];

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
