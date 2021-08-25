import React from 'react';
let todoListItems = [
    {
      id: 1,
    title: "Read React"
    },
    {
      id: 2,
    title: "Practice React"
    },
    {
      id: 3,
    title: "Share the Good and the Bad"
    }
   ]

function TodoList () {
    return (
      <ul> 
        {
          todoListItems.map((item) => {
            return (<li key = {item.id}>{item.title}</li>)
          })
        }  
      </ul>
    )
}

export default TodoList;