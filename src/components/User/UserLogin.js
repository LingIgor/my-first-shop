import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, toggleForm } from "../../redux/userSlice/userSlice";
import {
  FormContainer,
  FormTitle,
  Input,
  SubmitButton,
} from "./UserSignup.styled";

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
      <FormTitle>Login</FormTitle>
      <FormContainer onSubmit={handleSubmit}>
        <div>
          <Input
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
          <Input
            type="password"
            name="password"
            placeholder="your password"
            value={values.password}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>

        <SubmitButton>Login</SubmitButton>
        <SubmitButton
          onClick={() => {
            toggleCurrentTypeForm("signup");
          }}
        >
          Do you have acount? Signup
        </SubmitButton>
      </FormContainer>
      <div></div>
    </div>
  );
};
