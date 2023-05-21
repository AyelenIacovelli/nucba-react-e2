import React from 'react'
import { BrowserRouter, Route, Routes as ReactDomRoutes } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import Home from '../pages/Home/Home'
import ToDoList from '../pages/ToDoList/ToDoList'
import Pokeapi from '../pages/Pokeapi/Pokeapi'


const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                <ReactDomRoutes>
                    <Route path='/' element={<Home />} />
                    <Route path='todolist' element={<ToDoList />} />
                    <Route path='pokeapi' element={<Pokeapi />} />
                    <Route path='*' element={<p>Error</p>} />
                </ReactDomRoutes>
            </Layout>
        </BrowserRouter>
    )
}

export default Routes