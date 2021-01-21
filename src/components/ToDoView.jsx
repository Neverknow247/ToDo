import React from 'react';
import ToDo from './ToDo';

const ToDoView = props => {

    const Delete = () => {
        props.onListDelete();
    }
    const click = (e,i) => {
        console.log("LOLOL")
        props.onListDelete(e.target.value,i)
    }
    return (
        <>
            <h1>My to-do list</h1>

            {props.list.map((item, i) => 
            <p>{item} 
            <input type="checkbox" key={i} />
            <button onClick={e=>{click(e,i)}}>Delete</button>
            </p>)}

        </>
    )
}
export default ToDoView;
// e=>{console.log("Clicked")}