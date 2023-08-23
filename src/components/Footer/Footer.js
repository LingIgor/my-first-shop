import React from "react";
import LOGO from "../../images/logo.jpg";
import { ROUTES } from "../../utils/routesObject";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section>
      <div>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" width="70px" />
        </Link>
      </div>
      <div>Developed by</div>
    </section>
  );
};
