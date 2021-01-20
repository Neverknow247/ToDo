import React from 'react';
import ToDo from './ToDo';

const ToDoView = props => {

    const Delete = () => {
        props.onListDelete();
    }
    return (
        <>
        <h1>My to-do list</h1>
            <label>
                {props.list.map((item, i) => <p>{item} <input type="checkbox" key={i} /><button onClick={console.log("LOLOL")}>Delete</button></p>)}
            </label>
        </>
    )
}
export default ToDoView;