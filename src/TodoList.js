import React from 'react';
import TodoListItem from './TodoListItem';


function TodoList (props) {
  console.log(props);
    return (
     
      <ul> 
        
        {
          props.todoList.map((todo) => {
            return <TodoListItem key={todo.id} item={todo} />
          })
        }  
      </ul>
     
    )
}

export default TodoList;