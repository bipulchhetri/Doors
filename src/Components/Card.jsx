import React, { useState } from "react";
import "./Card.css"
import { data } from "../data/data.js";
const Card = () => {
  const [card, setCard] = useState(data);
  return (
    <div className="card">
        <h2>Top place to visit Doors</h2>
      <div className="products">
        {card.map((items, index) => (     
       <div className="image">
         <img src={items.image} alt="" />
              <h3>{items.name}</h3>
              <button>Explore</button>
       </div>

        
        ))}
     

</div>
</div>
  );
};

export default Card;
