import React, { useState }from "react";
import "./ToDoApp.css";
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import ToDoList from './ToDoList';

export default function ToDoApp (){
  const initialToDos = [
    { id: 1, task:"wash bedsheets", complete: false},
    { id: 2, task: "clean room", complete: false },
    { id: 3, task: "go shopping", complete: false }
  ]
  const [todos, setTodos] = useState(initialToDos);
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
        <ToDoList todos={initialToDos} />
      </div>
    </Paper>
  );
}
