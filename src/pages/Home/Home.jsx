import React from 'react'
import { HomeContainerStyled, HomeParrafo, HomeTitle, LinkPage, LinksContainer } from "./HomeStyles"

const Home = () => {
    return (
        <HomeContainerStyled>
            <HomeTitle>INDEX</HomeTitle>
            <HomeParrafo>No olvides hacer la tarea!</HomeParrafo>
            <LinksContainer>
                <LinkPage>
                    Checkeá tu lista de tareas
                </LinkPage>
                <LinkPage>
                    Estudiá la Pokedex
                </LinkPage>
            </LinksContainer>
        </HomeContainerStyled>
    )
}

export default Home