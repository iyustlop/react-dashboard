import Chart from "react-apexcharts";
import { createAreaChartOptions } from "@data/chartOptions";
import "./CustomerReview.css";

const reviewChartOptions = createAreaChartOptions({
  strokeColor: "#ff929f",
  showGrid: false,
  height: 160,
});

const reviewSeries = [
  {
    name: "Review",
    data: [10, 50, 30, 90, 40, 120, 100],
  },
];

const CustomerReview = () => {
  return (
    <div className="CustomerReview">
      <Chart options={reviewChartOptions} series={reviewSeries} type="area" />
    </div>
  );
};

export default CustomerReview;
