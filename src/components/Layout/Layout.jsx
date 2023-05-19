import React from 'react'
import { ContentContainerStyled, LayoutContainerStyled } from './LayoutStyles'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
    return (
        <LayoutContainerStyled>
            <Navbar />
            <ContentContainerStyled>{children}</ContentContainerStyled>
        </LayoutContainerStyled>
    )
}

export default Layout