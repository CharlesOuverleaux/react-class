import { Paper, TextField } from "@material-ui/core";
import React from "react";
import useInputState from "./hooks/useInputState";
import './ToDoForm.css';


function ToDoForm({ addToDo }){
  const [value , handleChange, reset] = useInputState("");
  return(
    <div className='ToDoForm'>
      <Paper style={{ margin: '1rem 0', padding: '1rem 0' }}>
        <form onSubmit={ e => {
          // ADD THIS BEC FORM RELOADS BY DEFAULT, THAT WOULD CAUSE A RE-RENDER
          e.preventDefault();
          addToDo(value);
          reset();
        }}>
          <TextField
            value={value}
            onChange={handleChange}
            margin='normal'
            label='Add New To Do'
            fullWidth
            />
        </form>
      </Paper>
    </div>
  );
}

export default ToDoForm;
