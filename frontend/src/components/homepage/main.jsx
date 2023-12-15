import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/main.css";

export function Main() {
  const [latestOffers, setLatestOffers] = useState([]);

   async function getLatestOffers() {
     const res = await axios.get("http://localhost:3030/games");
     setLatestOffers(res.data);
   }

  useEffect(() => {
    getLatestOffers();
  }, []);


  //const bigPoster = latestOffers[0]
  //console.log(latestOffers)

    if (latestOffers.length > 0) return (
    <main>
      <br />
      <div className="latest-offers">
        <h2 id="latest-offers-text">Последние предложения</h2>
        <img
          id="big-poster"
          src={latestOffers[0].posterUrl}
          alt="poster"
        />
        <img
          id="poster"
          src={latestOffers[1].posterUrl}
          alt="poster"
        />
        <img
          id="poster"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ULbwpKYLrju7BjD0GC8SxQHaFL%26pid%3DApi&f=1&ipt=e3a9324164c52f5cc830da013468f76533c6eb63e83f01ee045534858e285fc4&ipo=images"
          alt="poster"
        />
      </div>
    </main>
  )
  else return (<h1>Error</h1>)
}
