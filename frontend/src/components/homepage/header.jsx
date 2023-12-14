import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header.css";

export function Header() {
  return (
    <div className="header-body">
      <h1>SharkKeys.ru</h1>
      <br />
      <header>
        <div className="main">
          <Link to="/">
            <img
              id="logo"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F12%2FSan-Jose-Sharks-Symbol.png&f=1&nofb=1&ipt=342243a7c6078c3f101e5c0e8d557ad3fb6e145af9ee34786b714d5c22012d97&ipo=images"
              alt="logo"
            />
          </Link>
          <nav>
            <ul className="navigation-ul">
              <div className="nav-block">
                <li>
                  <Link to="/catalog">Каталог</Link>
                </li>
                <li>
                  <Link to="/popular">Популярное</Link>
                </li>
                <li>
                  <Link to="/discounts">Скидки</Link>
                </li>
                <li>
                  <Link to="/support">Поддержка</Link>
                </li>
                <li>
                  <Link to="/help">Помощь</Link>
                </li>
              </div>
              <div className="container">
                <h3>Поиск</h3>
              </div>
              <div className="search-bar">
                <input type="text" />
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._RTO9yp1xH5aQA0vS7fpHAHaHW%26pid%3DApi&f=1&ipt=0d54efe2a6bbc9c14d5f41140a0b76d6d694f251838ff4e92d403c31af00a2aa&ipo=images"
                  alt="search_icon"
                  id="search-icon"
                />
              </div>
              <div className="cart-exit-div">
                <ul className="cart-exit">
                  <li>
                    <img
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.wNULHZgGy7kwB3Rdq4hF3AHaHa%26pid%3DApi&f=1&ipt=c6c53f27b9a9477dec3093cffd6ed7853ec4e4ec655efd271dfadedfdca6ca70&ipo=images"
                      alt="cart"
                    />
                  </li>
                  <li>
                    <img
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ITe_jyKLTJEYffpIOw4CTQHaHa%26pid%3DApi&f=1&ipt=b3eacf38dfcbec341ea0f5155f3d1ad6ac459ef8feaf0f2b68a0385cce9e6db4&ipo=images"
                      alt="exit"
                    />
                  </li>
                </ul>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
