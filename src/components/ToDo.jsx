import React, { useState } from 'react';

const ToDo = props => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const changeHandler = e => {
        setItem(e.target.value)
    }

    const submitHandler = e => {
        e.preventDefault()
        setList([...list, item]);
        props.onNewList(item);
        setItem("");
    }
    return(
        <>
        <form onSubmit={submitHandler}>
            <label>New List Item: </label>
            <input type="text" name="item" onChange={changeHandler} value={item}/>
            <input type="submit" value="Add"></input>
        </form>
        </>
    );
}

export default ToDo;