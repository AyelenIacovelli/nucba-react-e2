import React from 'react'
import { LinkContainer, NavLinkStyled, NavbarContainerStyled } from './NavbarStyles'

const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <LinkContainer>
                <NavLinkStyled>
                    Home
                </NavLinkStyled>
                <NavLinkStyled>
                    To Do List
                </NavLinkStyled>
                <NavLinkStyled>
                    Pokeapi
                </NavLinkStyled>
            </LinkContainer>
        </NavbarContainerStyled>
    )
}

export default Navbar