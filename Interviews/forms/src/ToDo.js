import { Checkbox, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import "./ToDo.css";
import useToggleState from "./hooks/useToggleState";
import EditToDoForm from "./EditToDoForm";


function ToDo(props){
  const td = props.todo;
  const [isEditing, toggle] = useToggleState(false);
  const notEditing =
      <>
        <Checkbox checked={td.complete} onClick={() => props.toggle(props.id)} />
        <ListItemText style={{textDecoration: td.complete ? 'line-through' : 'none'}}>{td.task}</ListItemText>
      </>
  const Editing =
      <>
      <EditToDoForm todo={td} editToDo={props.editToDo} toggleEdit={toggle}/>
      </>
  return(
    <ListItem style={{height: '64px'}}>
      {isEditing ? Editing : notEditing }
      <ListItemSecondaryAction>
        <IconButton onClick={toggle}>
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
