import React, {useContext} from "react";

import { NotesContext } from "../store/todoStore";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const ctx = useContext(NotesContext);

  const removeHandler = (id) => {
    ctx.removeTodo(id);
  //   let item = id.some(item => item.name == id.name);

  //   if(!item) {
  //     TodoList(prevState => [...prevState, id]);
  //   }
  //   else {
  //     const newArr = [...id]; 
  //     newArr.splice(newArr.findIndex(
  //       item => item.name == item.id), 1
  //       );
  //     removeHandler(newArr);  
  //     // localStorage.removeItem(pokemon.name);
  //   }
  //   console.log();
  // };
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
