import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Nav>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/achievements">ACHIEVEMENTS</NavLink>
          </li>
          <li>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </Nav>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 7vh;
  max-height: 7vh;
  background-color: #3d0355;
  top: 0;
  left: 0;
  position: fixed;
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  height: 100%;
  li {
    margin-right: 20px;
    a {
      font-size: 1.3rem;
      color: white;
      text-decoration: none;
      &:hover {
        background-color: #610c84;
      }
    }
  }
`;

const NavWrapper = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;
