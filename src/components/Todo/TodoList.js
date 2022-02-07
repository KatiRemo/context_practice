import React, {useContext} from "react";

import { NotesContext } from "../store/todoStore";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const ctx = useContext(NotesContext);

  const removeHandler = (id) => {
    console.log('I was clicked')
    ctx.removeTodo(id);
  }

  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      {ctx.notes.map((note) => {
        return (
          <div 
          className={classes.todo} 
          key={note.id} 
          onClick={() => removeHandler(note.id)}
          >
            <h2>
              {note.id}. {note.title}
            </h2>
            <p>{note.task}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
