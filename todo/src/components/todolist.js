import React, { useState, useEffect } from "react";
import Todo from "./todo";

export default function TodoList({list}){
    const [todoList, setTodoList] = useState(list.arr);
    console.log("todo list entering", todoList);

    return(
        <div>
            {todoList.map(i => {
                return(
                    <Todo todoItem={i} />
                )
            })}
        </div>
    );
}