import React from "react";
import { UserSignup } from "./UserSignup";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "./UserLogin";
import { toggleFormType } from "../../redux/userSlice/userSlice";
import { Overlay } from "./UserSignup.styled";

export const UserForm = () => {
  const { currentUser } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const { showForm, formType } = useSelector(({ user }) => user);
  const toggleCurrentTypeForm = (type) => dispatch(toggleFormType(type));

  return showForm && !currentUser ? (
    formType === "signup" ? (
      <Overlay>
        <UserSignup toggleCurrentTypeForm={toggleCurrentTypeForm} />
      </Overlay>
    ) : (
      <Overlay>
        <UserLogin toggleCurrentTypeForm={toggleCurrentTypeForm} />
      </Overlay>
    )
  ) : (
    <></>
  );
};
