import React from 'react'
import { LinkContainer, NavLinkStyled, NavbarContainerStyled } from './NavbarStyles'

const Navbar = () => {

    return (
        <NavbarContainerStyled>
            <LinkContainer>
                <NavLinkStyled to={"/"} >
                    Home
                </NavLinkStyled>
                <NavLinkStyled to={"/todolist"}>
                    To Do List
                </NavLinkStyled>
                <NavLinkStyled to={"/pokeapi"}>
                    Pokeapi
                </NavLinkStyled>
            </LinkContainer>
        </NavbarContainerStyled>
    )
}

export default Navbar