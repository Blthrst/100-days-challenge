import React from "react";
import { Link } from "react-router-dom";
import "../../styles/main.css";

export function Main() {
  return (
    <main>
      <br />
      <div className="latest-offers">
        <h2 id="latest-offers-text">Последние предложения</h2>
        <img
          id="big-poster"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.o7hH-XOdOGkzPqT9WM7vEQHaLH%26pid%3DApi&f=1&ipt=74c57a19d9ba63012db8957663f06c88d0ca62349c4a9cd8e5627b2728079904&ipo=images"
          alt="poster"
        />
        <img
          id="top-small-poster"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Y7R5dm0nkhahfz7LLP4owgHaJY%26pid%3DApi&f=1&ipt=27bed6e4c1f4ee4357c476f9a092562ba5a496719dbaac650785a19c0f3922ca&ipo=images"
          alt="poster"
        />
        <img
          id="bottom-small-poster"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ULbwpKYLrju7BjD0GC8SxQHaFL%26pid%3DApi&f=1&ipt=e3a9324164c52f5cc830da013468f76533c6eb63e83f01ee045534858e285fc4&ipo=images"
          alt="poster"
        />
      </div>
    </main>
  );
}
