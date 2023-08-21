import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toggleForm, updateUser } from "../../redux/userSlice/userSlice";
import { ROUTES } from "../../utils/routesObject";

export const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector(({ user }) => user);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(values).some((val) => val);

    if (!isEmpty) return;
    dispatch(updateUser(values));

    dispatch(toggleForm(false));
  };

  return (
    <div>
      {!currentUser ? (
        <span>You need to login</span>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="your email"
              value={values.email}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="name"
              name="name"
              placeholder="your name"
              value={values.name}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="your password"
              value={values.password}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="avatar"
              name="avatar"
              placeholder="your avatar"
              value={values.avatar}
              autoComplete="off"
              onChange={handleChange}
              required
            />
          </div>
          <button onClick={() => navigate(ROUTES.HOME)}>Update account</button>
        </form>
      )}
    </div>
  );
};
