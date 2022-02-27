import React, { useContext, useState, useEffect } from "react";

import { NotesContext } from "../store/todoStore";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const ctx = useContext(NotesContext);
  const [filteredValue, setFilteredValue] = useState();
  const [filterList, setFilterList] = useState(ctx.notes);

  const removeHandler = (id) => {
    ctx.removeTodo(id);
  }

  useEffect(() => {
    if (filteredValue === "true") {
      setFilterList(
        ctx.notes.filter((item) => item.done === !!filteredValue)
      );
    }
    else if (filteredValue === "false") {
      setFilterList(
        ctx.notes.filter((item) => item.done !== !!filteredValue)
      );
    }
    else {
      setFilterList(ctx.notes);
    }
  }, [filteredValue, ctx]);

  const filterHandler = (e) => {
    setFilteredValue(e.target.value);
  }

  return (
    <div className={classes.todos}>
      <h1>Notes:</h1>
      <select name="done" defaultValue="all" onChange={filterHandler}>
        <option value="true">Done</option>
        <option value="false">Not done</option>
        <option value="all">All</option>
      </select>
      {filterList.map((note) => {
        return (
          <div className={`${classes.todo} ${note.done ? classes.done : ""}`}
          key={note.id}
          onClick={() => ctx.doneToDo(note.id)}
          >
            <h2>{note.title}</h2>
            <p>{note.task}</p>
            <span
            className={`material-icons ${classes.delete}`}
            onClick={() => removeHandler(note.id)}
            >
              delete
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
