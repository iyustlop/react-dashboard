import "./Cards.css";
import { CardsData } from "@data/data";
import Card from "@components/Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card) => (
        <div className="parentContainer" key={card.title}>
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            series={card.series}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
