import React from 'react';
import TodoListItem from './TodoListItem';
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
          todoListItems.map((todo) => {
            return <TodoListItem key={todo.id} item={todo} />
          })
        }  
      </ul>
    )
}

export default TodoList;