import React from 'react'
import { HomeContainerStyled, HomeParrafo, HomeTitle, LinkPage, LinksContainer } from "./HomeStyles"

const Home = () => {
    return (
        <HomeContainerStyled>
            <HomeTitle>INDEX</HomeTitle>
            <HomeParrafo>No olvides hacer la tarea!</HomeParrafo>
            <LinksContainer>
                <LinkPage to={"/todolist"}>
                    Checkeá tu lista de tareas
                </LinkPage>
                <LinkPage to={"/pokeapi"}>
                    Estudiá la Pokedex
                </LinkPage>
            </LinksContainer>
        </HomeContainerStyled>
    )
}

export default Home