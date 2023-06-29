// import React, { useState } from "react";
// import "../index.css";
// import { data } from "../data/data.js";
// const Place = () => {
//   const [card, setCard] = useState(data);
//   return (
//     <div>
//       <h2 className="heading">Top Place to Visit Doors</h2>
//       <div className="card">
//         {card.map((items, index) => (
//           <div className="ca">
//             <img className="card-img" src={items.image} alt="" />
//             <div className="text">
//               <h2>{items.name}</h2>
//               <button>Explore</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Place;
import React from 'react'
import Card from './Card'

const Place = () => {
  return (
    <div>
      <Card/>
    </div>
  )
}

export default Place

