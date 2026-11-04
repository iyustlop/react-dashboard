import "./Updates.css";
import { UpdatesData } from "@data/data";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => (
        <div key={update.name} className="Update">
          <img src={update.img} alt={update.name} />
          <div className="noti">
            <div style={{ marginLeft: "0.5rem" }}>
              <span>{update.name}</span>
              <span> {update.noti}</span>
            </div>
            <span>{update.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Updates;
