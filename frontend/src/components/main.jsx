import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

export function Main() {
  return (
    <main>
      <h2>Последние предложения</h2>
      <br />
      <div className="latest-offers">
        <img
          id="big-poster"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.biiGtCNTmNg_MmIPsiK5LAHaEP%26pid%3DApi&f=1&ipt=95e94f0c876d4b53c09bf89e850466c6b18af64379d01444e3c114974a5a6b24&ipo=images"
          alt="poster"
        />
        <img
          id="top-small-poster"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.biiGtCNTmNg_MmIPsiK5LAHaEP%26pid%3DApi&f=1&ipt=95e94f0c876d4b53c09bf89e850466c6b18af64379d01444e3c114974a5a6b24&ipo=images"
          alt="poster"
        />
        <img
          id="bottom-small-poster"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.biiGtCNTmNg_MmIPsiK5LAHaEP%26pid%3DApi&f=1&ipt=95e94f0c876d4b53c09bf89e850466c6b18af64379d01444e3c114974a5a6b24&ipo=images"
          alt="poster"
        />
      </div>
    </main>
  );
}
