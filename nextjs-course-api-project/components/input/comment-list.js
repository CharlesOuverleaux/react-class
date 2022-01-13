import classes from './comment-list.module.css';

function CommentList(props) {
  const { items } = props;
  return (
    <ul className={classes.comments}>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.text}</p>
          <div>
            By <p>{item.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
