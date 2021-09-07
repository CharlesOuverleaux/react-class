import React from "react";
import { Paper, List, ListItem, Divider } from "@material-ui/core";

export default function ToDoList(props) {
  return(
    <Paper>
      <List>
        {props.todos.map(td =>
            <div key={td.id}>
            <ListItem>{td.task}</ListItem>
            <Divider/>
            </div>
            )
        }
      </List>

    </Paper>
  );
}
