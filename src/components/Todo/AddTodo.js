import React, {useState} from "react";
import classes from "./AddTodo.module.css";
import Button from "../UI/Button";


const AddTodo = ({ addHandler }) => {
  const [todo, setTodo] = useState({title: '', task: ''});

  const changeHandler = (e) => {
    const {name, value} = e.target;

    setTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(todo);
  };

  return (
    <form onSubmit={addHandler} className={classes.input}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" onChange={changeHandler} />
      </div>
      <div>
        <label htmlFor="task">Task</label>
        <input type="text" id="task" name="task" onChange={changeHandler}/>
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default AddTodo;
