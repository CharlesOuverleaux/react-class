import React from "react";
import { Paper, List } from "@material-ui/core";
import ToDo from "./ToDo";

export default function ToDoList(props) {
  return(
    <Paper>
      <List>
        {props.todos.map(td =>
            <ToDo todo={td} key={td.id} id={td.id} remove={props.remove} toggle={props.toggle}/>
            )
        }
      </List>

    </Paper>
  );
}
