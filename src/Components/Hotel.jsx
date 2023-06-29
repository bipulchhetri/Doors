// import React from "react";
// import "../index.css";
// import { categories, hotels } from "../data/data.js";
// const Hotel = () => {
//   return (
//     <div className="head" id="hotel">
//       <h2 className="heading">Top Place to Visit Doors</h2>
//       <div className="card">
//         {hotels.map((items, index) => (
//           <div className="cat">
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

// export default Hotel;


import React, { useState } from "react";
import './Card.css'
import { hotels} from "../data/data.js";
const Card = () => {
  return (
    <div className="card">
        <h2>Best Hotel in Doors</h2>
      <div className="products">
        {hotels.map((items, index) => (     
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
