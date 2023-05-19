import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const NavbarContainerStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    max-width: 1200px;
    padding: 5px;
    background-color: blanchedalmond;
`
export const LinkContainer = styled.ul`
    display: flex;
    gap: 10px;
`

export const NavLinkStyled = styled(NavLink)`
    color: brown;
    &.active{
        color: black;
        font-weight: 600;
    }
`