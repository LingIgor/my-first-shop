import styled from "styled-components";
import { Link } from "react-router-dom";

const SignupBtn = styled.button`
  display: inline-block;
  height: 30px;
  width: 90px;
  border-radius: 10px;
  background: black;
  color: white;
  border: none;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 1);
  }
  &:active {
    box-shadow: 0 0 5px rgba(255, 255, 255, 1);
    transform: translateY(2px);
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 20px;
  background: linear-gradient(to bottom, #111, #444);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  color: white;
  border-radius: 10px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const LogoImg = styled.img`
  width: 40px;
`;

const NameDiv = styled.div`
  font-size: 25px;
  color: #ffffff;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s, text-shadow 0.2s;

  cursor: pointer;

  &:hover {
    text-shadow: 2px 2px 6px rgba(231, 76, 60, 0.8);
  }

  &:active {
    transform: translateY(2px);
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
`;

const CartLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 16px;
`;

const CartIcon = styled.use`
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
`;

const CartCount = styled.span`
  background-color: #cc8a8a;
  color: white;
  padding: 3px 6px;
  border-radius: 50%;
`;

const StyledInput = styled.input`
  height: 20px;
  width: 200px;
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: white;
  color: #333;
  &:focus {
    outline: none;
    border-color: #66afe9;
    box-shadow: 0 0 15px rgba(102, 175, 233, 0.8);
  }

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transform: translateY(2px);
  }
`;

const StyledSvgCart = styled.svg`
  width: 25px;
  height: 25px;
  fill: grey;
`;
const StyledSvgHeart = styled.svg`
  width: 25px;
  height: 25px;
  fill: red;
`;

export {
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
};
