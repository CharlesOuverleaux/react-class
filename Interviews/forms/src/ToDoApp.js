import React, { useState }from "react";
import "./ToDoApp.css";
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { v4 as uuidv4 } from 'uuid';


export default function ToDoApp (){
  const initialToDos = []
  const [todos, setToDos] = useState(initialToDos);

  const addToDo = newToDoText => {
    setToDos([...todos, { id: uuidv4(), task: newToDoText, complete: false}]);
  }

  const removeToDo = toDoId => {
    const updatedToDo = todos.filter(todo => toDoId !== todo.id);
    setToDos(updatedToDo);
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
            <ToDoList todos={todos} remove={removeToDo}/>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
