import React, {useState} from "react";

export default function Todo({todoItem}){

    return(
        <div className="todoitem">
            <h1>{todoItem.item}</h1>
            <h3>{todoItem.completed.toString()}</h3>
            <h3>{todoItem.id}</h3>
        </div>
    )
}