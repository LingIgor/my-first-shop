import React from "react";
import { UserSignup } from "./UserSignup";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "./UserLogin";
import { toggleFormType } from "../../redux/userSlice/userSlice";

export const UserForm = () => {
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);
  const toggleCurrentTypeForm = (type) => dispatch(toggleFormType(type));

  return showForm ? (
    formType === "signup" ? (
      <UserSignup toggleCurrentTypeForm={toggleCurrentTypeForm} />
    ) : (
      <UserLogin toggleCurrentTypeForm={toggleCurrentTypeForm} />
    )
  ) : (
    <></>
  );
};
