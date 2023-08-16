import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routesObject";
import LOGO from "../../images/logo.png";

export const Header = () => {
  return (
    <div>
      <div>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" width="70px" />
        </Link>
      </div>
      <div>Guest</div>
      <form>
        <input
          name="search"
          placeholder="Search for anything..."
          autoComplete="off"
          onChange={() => {}}
          value=""
        ></input>
        <div></div>
      </form>

      <div>
        <Link to={ROUTES.HOME}></Link>
      </div>
      <div>
        <Link to={ROUTES.CART}></Link>
        <span>2</span>
      </div>
    </div>
  );
};
