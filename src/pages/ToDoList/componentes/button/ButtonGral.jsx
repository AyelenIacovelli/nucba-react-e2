import React from 'react'
import { ButtonDeleteAll } from './ButtonGralStyles'

const ButtonAll = ({ item, handleDeleteAll }) => {
    return (
        <ButtonDeleteAll onClick={() => handleDeleteAll(item)}>Borrar todo</ButtonDeleteAll>
    )
}

export default ButtonAll