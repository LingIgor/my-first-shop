import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routesObject";
import LOGO from "../../images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../../redux/userSlice/userSlice";
// import {
//   MainDiv,
//   NameDiv,
//   IconFill,
//   SignupBtn,
//   StyledInput,
// } from "./Header.style";
import {
  MainDiv,
  LogoLink,
  LogoImg,
  NameDiv,
  SearchForm,
  CartLink,
  CartIcon,
  CartCount,
  SignupBtn,
  StyledInput,
  StyledSvgCart,
  StyledSvgHeart,
} from "./Header.style";

export const Header = () => {
  const { currentUser } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({ name: "Guest" });
  // const [searchValue, setSearchValue] = useState("");
  // const { data, isLoading } = useGetProductsQuery({ title: searchValue });
  // console.log(data);

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser]);

  const handleClick = () => {
    if (!currentUser) {
      dispatch(toggleForm(true));
    } else {
      navigate(ROUTES.PROFILE);
    }
  };

  // const handleSearch = ({ target: { value } }) => {
  //   setSearchValue(value);
  // };

  return (
    <MainDiv>
      <div>
        <LogoLink to={ROUTES.HOME}>
          <LogoImg src={LOGO} alt="logo" width="40px" />
        </LogoLink>
      </div>
      {!currentUser ? (
        <SignupBtn onClick={handleClick}> LogIn/Up</SignupBtn>
      ) : (
        <SignupBtn>LogOut</SignupBtn>
      )}

      <NameDiv onClick={handleClick}>{values.name}</NameDiv>

      <SearchForm>
        <StyledInput
          name="search"
          placeholder="Search for anything..."
          autoComplete="off"
          onChange={() => {}}
          value=""
        />
        <div></div>
      </SearchForm>

      <div>
        <CartLink to={ROUTES.CART}>
          <StyledSvgCart>
            <CartIcon
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-cart`}
            />
          </StyledSvgCart>
          Cart
          <CartCount>0</CartCount>
        </CartLink>
      </div>
      <div>
        <CartLink>
          <StyledSvgHeart>
            <CartIcon
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-heart`}
            />
          </StyledSvgHeart>
          Favourite
          <CartCount>0</CartCount>
        </CartLink>
      </div>
    </MainDiv>
  );
};
