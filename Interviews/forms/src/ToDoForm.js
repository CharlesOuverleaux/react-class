import { Paper, TextField } from "@material-ui/core";
import React from "react";
import useInputState from "./hooks/useInputState";
import './ToDoForm.css';


export default function ToDoForm(props){
  const [value , handleChange, reset] = useInputState('');
  return(
    <div className='ToDoForm'>
      <Paper>
        <form>
        <TextField value={value} onChange={handleChange}/>
        <button onClick={reset}>Submit</button>
        </form>
      </Paper>
    </div>
  );
}
