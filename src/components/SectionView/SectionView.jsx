import Cards from "@components/Cards/Cards";
import DeferredChart from "@components/DeferredChart/DeferredChart";
import Table from "@components/Table/Table";
import { CardsData, CustomersData, ProductsData } from "@data/data";
import { createAreaChartOptions } from "@data/chartOptions";
import PropTypes from "prop-types";
import "./SectionView.css";

const analyticsChartOptions = createAreaChartOptions({
  strokeColor: "#fca61f",
  fillColor: "#fca61f",
  showYAxis: true,
  height: 320,
});

const sectionData = {
  customers: {
    heading: "Customer directory",
    label: "Customer directory",
    columns: [
      { key: "name", heading: "Name" },
      { key: "email", heading: "Email" },
      { key: "orders", heading: "Orders" },
      { key: "spent", heading: "Total spent" },
    ],
    rows: CustomersData,
  },
  products: {
    heading: "Product inventory",
    label: "Product inventory",
    columns: [
      { key: "name", heading: "Product" },
      { key: "category", heading: "Category" },
      { key: "stock", heading: "In stock" },
      { key: "price", heading: "Price" },
    ],
    rows: ProductsData,
  },
};

const DataTable = ({ section }) => {
  const { heading, label, columns, rows } = sectionData[section];

  return (
    <section className="sectionPanel">
      <h2>{heading}</h2>
      <div className="sectionTableContainer">
        <table className="sectionTable" aria-label={label}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th scope="col" key={column.key}>
                  {column.heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.email ?? row.name}>
                {columns.map((column) => (
                  <td key={column.key}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

DataTable.propTypes = {
  section: PropTypes.oneOf(["customers", "products"]).isRequired,
};

const AnalyticsView = () => (
  <>
    <section className="analyticsSummary" aria-label="Key metrics">
      {CardsData.map((item) => (
        <article className="analyticsMetric" key={item.title}>
          <h2>{item.title}</h2>
          <p>${item.value}</p>
        </article>
      ))}
    </section>
    <section className="sectionPanel analyticsPanel">
      <h2>Sales trend — last 24 hours</h2>
      <DeferredChart
        ariaLabel="Sales trend over the last 24 hours"
        options={analyticsChartOptions}
        series={CardsData[0].series}
      />
    </section>
  </>
);

const SectionView = ({ section }) => {
  if (section === "dashboard") {
    return (
      <>
        <Cards />
        <Table />
      </>
    );
  }

  if (section === "orders") return <Table />;
  if (section === "analytics") return <AnalyticsView />;
  return <DataTable section={section} />;
};

SectionView.propTypes = {
  section: PropTypes.oneOf(["dashboard", "orders", "customers", "products", "analytics"])
    .isRequired,
};

export default SectionView;
