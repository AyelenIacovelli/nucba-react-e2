import React, { useContext } from 'react'
import ToDoListContext from "./componentes/context/ToDoListContext"
import AddTask from "./componentes/Task/AddTask"
import List from "./componentes/Task/List"
import ButtonAll from "./componentes/button/ButtonGral"

const ToDoList = () => {

    const { handleAdd, handleDeleteAll } = useContext(ToDoListContext)

    return (
        <>
            <AddTask handleAdd={handleAdd} />
            <List />
            <ButtonAll handleDeleteAll={handleDeleteAll}></ButtonAll>
        </>
    )
}

export default ToDoList