import Updates from "../Updates/Updates";
import CustomerReview from "../CustomerReview/CustomerReview";
import "./RightSide.css";

const RightSide = () => {
  return (
    <aside className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </aside>
  );
};

export default RightSide;
