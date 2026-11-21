import DeferredChart from "@components/DeferredChart/DeferredChart";
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
      <DeferredChart
        ariaLabel="Customer reviews over the last 24 hours"
        options={reviewChartOptions}
        series={reviewSeries}
      />
    </div>
  );
};

export default CustomerReview;
