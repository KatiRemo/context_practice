import React, { useReducer } from 'react';

const initialState = {
    notes: [
        {
          id: 1,
          title: "Create clean app",
          task: "npx create-react-app",
          done: false,
        },
        {
          id: 2,
          title: "Clean app",
          task: "Delete and clean unnecessary stuff",
          done: false,
        },
        {
          id: 3,
          title: "Create store / context",
          task: "Create new file and use React.createContext()",
          done: false,
        },
      ]
}

export const NotesContext = React.createContext();

const reducer = (state, action) => { //action is the dispatch state for example ADD NOTE
    switch (action.type) {
        case 'ADD_NOTE': 
        return {
            notes: [
                ...state.notes, 
                {
            id: new Date().valueOf(), 
            // title: action.todo.title, 
            // task: action.todo.task, 
            ...action.todo, //this is a neater way for the two actions above
            done: false
        },
        ],
    };
    case 'REMOVE_NOTE':
        return state;
        default:
            return state;
} 
};

export const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTodoItem = (todo) => {
        dispatch({
            type: 'ADD_NOTE',
            todo: todo,
        });
    }

    const removeTodo = (id) => {
        dispatch({
            type: 'REMOVE_NOTE',
            id: id
        });
    }

    const value = {
        notes: state.notes,
        addTodoItem: addTodoItem,
        removeTodo: removeTodo,
    }

    return <NotesContext.Provider value={value}>
         {children} 
         </NotesContext.Provider>;
};
