import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, toggleForm } from "../../redux/userSlice/userSlice";

export const UserLogin = ({ toggleCurrentTypeForm }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(values).some((val) => val);

    if (!isEmpty) return;
    dispatch(loginUser(values));

    dispatch(toggleForm(false));
  };

  return (
    <div>
      <div>Sign Up</div>
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
            type="password"
            name="password"
            placeholder="your password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <button>Login</button>
      </form>
      <div>
        <button
          onClick={() => {
            toggleCurrentTypeForm("signup");
          }}
        >
          Do you have acount? Signup
        </button>
      </div>
    </div>
  );
};
