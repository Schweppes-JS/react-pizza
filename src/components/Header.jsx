import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/img/pizza-logo.svg";
import Button from "./Button";

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            <Button totalPrice={totalPrice} totalCount={totalCount} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
