import React, { useState } from 'react';

const ToDo = props => {
    const [item, setItem] = useState("");

    let newItem = {
        name: "",
        checked: false
    };

    const changeHandler = e => {
        newItem.name = e.target.value
        setItem(e.target.value)
    };

    const submitHandler = e => {
        e.preventDefault()
        props.onNewList(item);
        setItem("");
    };
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