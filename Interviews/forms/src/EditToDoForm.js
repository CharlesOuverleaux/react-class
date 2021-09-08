import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function EditToDoForm(params) {
  const td = params.todo;
  const [value, handleChange, reset] = useInputState(td.task);

  return(
    <form onSubmit={ e => {
      // ADD THIS BEC FORM RELOADS BY DEFAULT, THAT WOULD CAUSE A RE-RENDER
      e.preventDefault();
      params.editToDo(td.id, value);
      reset();
      params.toggleEdit();
    }}>
      <TextField
        value={value}
        onChange={handleChange}
        margin='normal'
        fullWidth
      />
    </form>
  );
}

export default EditToDoForm;
