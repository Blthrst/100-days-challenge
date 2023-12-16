import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/main.css";

export function Main() {
  const [bigDiscounts, setBigDiscounts] = useState([]);

   async function getBigDiscounts() {
     const res = await axios.get(
       "http://localhost:3030/games/orderedByDiscount/3"
     );
     setBigDiscounts(res.data);
   }

  useEffect(() => {
    getBigDiscounts();
  }, []);

    if (bigDiscounts.length > 0)
      return (
        <main>
          <br />
          <div className="latest-offers">
            <h2 id="latest-offers-text">Последние предложения</h2>
              <img
                id="big-poster"
                src={bigDiscounts[0].posterUrl}
                alt="poster"
              />
            <img id="poster" src={bigDiscounts[1].posterUrl} alt="poster" />
            <img id="poster" src={bigDiscounts[2].posterUrl} alt="poster" />
          </div>
        </main>
      );
    else return <h1>Error</h1>;
}
