import classes from './BottleItem.module.css';

const TodoItem: React.FC<{ name: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li className={classes.bottleitem}>
      {props.name} <span className={classes.delete} onClick={props.onRemoveTodo}>X</span>
    </li>
  );
};

export default TodoItem;
