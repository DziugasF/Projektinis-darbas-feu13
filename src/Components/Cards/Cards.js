import React from "react";
import "../../styles/Cards.css";
import CardItem from "../CardItem/CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Deals!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fKMqi3Dymvr1aARxqfDE0QFiNBGnvURcyniX7gUnAw&s"
              text="Best Deal EVER!"
              label="Cheap"
              path={`/computers/5656`}
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fKMqi3Dymvr1aARxqfDE0QFiNBGnvURcyniX7gUnAw&s"
              text="Best Deal EVER!"
              label="Cheap"
              path={`/computers/5656`}
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fKMqi3Dymvr1aARxqfDE0QFiNBGnvURcyniX7gUnAw&s"
              text="Best Deal EVER!"
              label="Cheap"
              path={`/computers/5656`}
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fKMqi3Dymvr1aARxqfDE0QFiNBGnvURcyniX7gUnAw&s"
              text="Best Deal EVER!"
              label="Cheap"
              path={`/computers/5656`}
            />
            <CardItem
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fKMqi3Dymvr1aARxqfDE0QFiNBGnvURcyniX7gUnAw&s"
              text="Best Deal EVER!"
              label="Cheap"
              path={`/computers/5656`}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
