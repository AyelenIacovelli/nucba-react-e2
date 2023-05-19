import React from 'react'
import { TaskButtonDelete, TaskLi, TaskP } from './CardTaskStyles'

const CardTask = ({ item, handleDelete }) => {

    return (
        <>
            <TaskLi >
                <TaskP  >{item.name}</TaskP>
                <TaskButtonDelete onClick={() => handleDelete(item.id)} >Borro</TaskButtonDelete>
            </TaskLi>
        </>
    )
}

export default CardTask