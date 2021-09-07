import React, { useState }from "react";
import "./ToDoApp.css";
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function ToDoApp (){
  const initialToDos = [
    { id: 1, task:"wash bedsheets", complete: false},
    { id: 2, task: "clean room", complete: false },
    { id: 3, task: "go shopping", complete: false },
    { id: 4, task: "go do something", complete: false }
  ]
  const [todos, setToDos] = useState(initialToDos);

  const addToDo = newToDoText => {
    setToDos([...todos, {id: 5, task: newToDoText, complete: false}]);
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
          <Typography color='inherit'>TO DO LIST</Typography>
        </Toolbar>
      </AppBar>
      <div className='Spacer'>
        <Grid container justify='center' style={{marginTop:'1rem'}}>
          <Grid item xs={11} md={8} lg={4}>
            <ToDoForm addToDo={addToDo}/>
            <ToDoList todos={todos} />
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
}
