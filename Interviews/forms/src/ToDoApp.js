import React, { useState, useEffect}from "react";
import "./ToDoApp.css";
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { v4 as uuidv4 } from 'uuid';


export default function ToDoApp (){
  // Grab the todos stored on local storage
  const initialToDos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const [todos, setToDos] = useState(initialToDos);
  // Anytime this component (ToDoApp) will render, useEffect (equiv. componentDidUpdate) will run
  // since we pass it a function, this function will run after every render
  // we will specify that it should render only after a change in todos (18)
  useEffect(() => {
    console.log("synching with storage");
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addToDo = newToDoText => {
    setToDos([...todos, { id: uuidv4(), task: newToDoText, complete: false}]);
  }

  const removeToDo = toDoId => {
    const updatedToDo = todos.filter(todo => toDoId !== todo.id);
    setToDos(updatedToDo);
  }

  const toggleToDo = toDoId => {
    const updatedToDo = todos.map(todo =>
      todo.id === toDoId ? {...todo, complete: !todo.complete} : todo)
    setToDos(updatedToDo);
  }

  const editToDo = (toDoId, newTask) => {
    const editedToDo = todos.map(todo =>
      todo.id === toDoId ? {...todo, task: newTask} : todo)
    setToDos(editedToDo);
  }

  return(
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
      >
      <AppBar>
        <Toolbar color='primary' position='static' style={{ height:'64px'}}>
          <PlaylistAddCheckIcon></PlaylistAddCheckIcon>
          <Typography color='inherit'>TO DO LIST</Typography>
        </Toolbar>
      </AppBar>
      <div className='Spacer'>
        <Grid container justifyContent='center' style={{marginTop:'1rem'}}>
          <Grid item xs={11} md={8} lg={4}>
            <ToDoForm addToDo={addToDo}/>
            <ToDoList todos={todos} remove={removeToDo} toggle={toggleToDo} editToDo={editToDo}/>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
