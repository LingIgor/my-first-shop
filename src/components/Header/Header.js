import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routesObject";
import LOGO from "../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../redux/userSlice/userSlice";

export const Header = () => {
  const { currentUser } = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const [values, setValues] = useState({ name: "Guest" });
  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) {
      dispatch(toggleForm(true));
    }
  };

  return (
    <div>
      <div>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="logo" width="70px" />
        </Link>
      </div>
      <button onClick={handleClick}> SIGNUP</button>
      <div>{values.name}</div>
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
