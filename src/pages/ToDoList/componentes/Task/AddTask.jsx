import React, { useState } from 'react'
import { TaskButton, TaskForm, TaskInput, TaskTitle } from './AddTaskStyles'
import CardMsg from './CardMsg';

const AddTask = ({ handleAdd }) => {

    const [nameTask, setNameTask] = useState('');
    const [errorForm, setErrorForm] = useState(false);



    //INTENTÉ QUE LAS TAREAS PERMANEZCAN EN LOCAL STORAGE DE DISTINTAS MANERAS, PERO ALGO MAL HAGO. POR FAVOR, PODRIAN EXPLICARME COMO SE HACE CON MI CODIGO?
    // const [tasks, setTasks] = useState(() => {
    //     const storedTasks = localStorage.getItem("tasks");
    //     return storedTasks ? JSON.parse(storedTasks) : [];
    //   });
    //   useEffect(() => {
    //     localStorage.setItem("tasks", JSON.stringify(tasks));
    //   }, [tasks]);





    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nameTask) {
            setErrorForm(true);
            return;
        }
        setErrorForm(false);

        const newTask = {
            id: new Date().getTime(),
            name: nameTask
        }

        handleAdd(newTask);
        setNameTask("");
    }

    return (
        <>
            <TaskTitle>To Do List </TaskTitle>
            <TaskForm onSubmit={handleSubmit}>
                <TaskInput type='text' placeholder='Escriba una tarea' name='nameTask' value={nameTask} onChange={(e) => setNameTask(e.target.value)} />
                <TaskButton type='submit'>Agregar</TaskButton>
            </TaskForm>
            {errorForm && (
                <CardMsg message={"Escriba una tarea"} />
            )}
        </>
    )
}

export default AddTask