import { Checkbox, ListItem, ListItemIcon, ListItemText, IconButton, ListItemSecondaryAction } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "./ToDo.css";


function ToDo(props){
  const td = props.todo;
  return(
    <ListItem>
      <Checkbox checked={td.complete} onClick={() => props.toggle(props.id)} />
      <ListItemText style={{textDecoration: td.complete ? 'line-through' : 'none'}}>{td.task}</ListItemText>
      <ListItemSecondaryAction>
        <IconButton>
          <EditIcon></EditIcon>
        </IconButton>
        <IconButton onClick={() => props.remove(props.id)}>
          <DeleteIcon ></DeleteIcon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ToDo;
