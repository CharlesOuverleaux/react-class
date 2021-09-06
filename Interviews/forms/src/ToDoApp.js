import React from "react";
import "./ToDoApp.css";
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';

export default function ToDoApp (){
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
        <Toolbar color='primary' position='static' style={{height:'64px'}}>
          <Typography>TO DO LIST</Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}
