import { Paper, TextField } from "@material-ui/core";
import React from "react";
import useInputState from "./hooks/useInputState";
import './ToDoForm.css';


function ToDoForm({ addToDo }){
  const [value , handleChange, reset] = useInputState("");
  return(
    <div className='ToDoForm'>
      <Paper>
        <form onSubmit={ e => {
          // ADD THIS BEC FORM RELOADS BY DEFAULT, THAT WOULD CAUSE A RE-RENDER
          e.preventDefault();
          addToDo(value);
          reset();
        }}>
          <TextField value={value} onChange={handleChange}/>
        </form>
      </Paper>
    </div>
  );
}

export default ToDoForm;
