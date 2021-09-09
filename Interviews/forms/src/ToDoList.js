import React from "react";
import { Paper, List, Divider } from "@material-ui/core";
import ToDo from "./ToDo";

export default function ToDoList(props) {
  // if there are no todos, we do not display anything and return null
  // have to return null otherwise react throws an err
  if (props.todos.length) {return(
    <Paper>
      <List>
        {props.todos.map((td, i) =>
          <>
          <ToDo todo={td} key={td.id} id={td.id} remove={props.remove} toggle={props.toggle} editToDo={props.editToDo}/>
          {i < props.todos.length - 1 && <Divider />}
          </>
            )
        }
      </List>

    </Paper>
  );}
    return null
}
