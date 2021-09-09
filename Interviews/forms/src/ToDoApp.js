import React, { useEffect}from "react";
import "./ToDoApp.css";
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import useToDoState from "./hooks/useToDoState";


export default function ToDoApp (){
  // Grab the todos stored on local storage
  const initialToDos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  // Grad CRUD from hooks
  const {todos, addToDo, removeToDo, toggleToDo, editToDo} = useToDoState(initialToDos);
  // sync w localStorage
  useEffect(() => {
    console.log("synching with storage");
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return(
    <Paper className='Paper' elevation={0}>
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
