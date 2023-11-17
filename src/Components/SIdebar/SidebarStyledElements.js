import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: #8365bb;
  height: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: auto;
  margin-left: 5px;
`;

export const CenterNav = styled.nav`
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const RightNav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 5px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #fff;
  }
`;

export const NavImg = styled.img`
  max-height: 3vh;
  min-height: 30px;
`;
