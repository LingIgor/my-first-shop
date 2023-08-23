import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 15%;
  height: 500px;
  background: linear-gradient(to bottom, #111, #444);
  color: #ffffff;
  font-family: Arial, sans-serif;
  border-radius: 5px;
`;

const SideStyleBar = styled.div`
  flex: 0 0 20%;
  padding: 20px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Categories = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  margin-bottom: 20px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  margin-bottom: 10px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  transition: color 0.3s ease;

  &:hover {
    color: #44014c;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

export {
  Container,
  SideStyleBar,
  Categories,
  Content,
  Nav,
  Ul,
  Li,
  Link,
  FooterLinks,
  FooterLink,
};
