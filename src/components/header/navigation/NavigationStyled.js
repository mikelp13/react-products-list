import styled from "styled-components";

export const NavList = styled.ul`
  max-width: 1170px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;

  .navagationListItem:not(:last-child) {
    margin-right: 20px;
  }
  .navagationLink {
    padding: 15px;
    text-decoration: none;
    text-transform: uppercase;
    font-size:20px;
    font-weight: 700;
    color: #fff;
  }
  .activeLink {
    color: #00bcd5;
  }
`;