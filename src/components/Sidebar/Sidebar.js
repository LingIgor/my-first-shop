import React from "react";
import { useSelector } from "react-redux";

import {
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
} from "./SideBar.styled";

export const Sidebar = ({ amount }) => {
  const { list } = useSelector(({ categories }) => categories);
  const oneSideBar = list.filter((_, i) => i < amount);
  return (
    <Container>
      <SideStyleBar>
        <Categories>CATEGORIES</Categories>
        <Nav>
          <Ul>
            {oneSideBar.map(({ id, name }) => (
              <Li key={id}>
                <Link to={`/categories/${id}`}>{name}</Link>
              </Li>
            ))}
          </Ul>
        </Nav>
        <FooterLinks>
          <FooterLink href="/help" target="_blank">
            Help
          </FooterLink>
          <FooterLink href="/terms" target="_blank">
            Terms
          </FooterLink>
        </FooterLinks>
      </SideStyleBar>
      <Content>{/* Content of the main section */}</Content>
    </Container>
  );
};
