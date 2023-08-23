import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, toggleForm } from "../../redux/userSlice/userSlice";
import {
  FormContainer,
  FormTitle,
  Input,
  SubmitButton,
} from "./UserSignup.styled";

export const UserSignup = ({ toggleCurrentTypeForm }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmpty = Object.values(values).some((val) => val);

    if (!isEmpty) return;
    dispatch(createUser(values));

    dispatch(toggleForm(false));
  };

  return (
    <div>
      <FormTitle>Sign Up</FormTitle>
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
        <div>
          <Input
            type="avatar"
            name="avatar"
            placeholder="your avatar"
            value={values.avatar}
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <SubmitButton>Create account</SubmitButton>
        <div>
          <SubmitButton
            onClick={() => {
              toggleCurrentTypeForm("login");
            }}
          >
            Create an account. Log In?
          </SubmitButton>
        </div>
      </FormContainer>
    </div>
  );
};
