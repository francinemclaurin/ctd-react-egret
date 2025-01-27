import React, {useState} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  
  const [todoList, setTodoList] = useState([]);
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }
  return (
    <div>
      <h1>To Do List</h1>
        <AddTodoForm onAddTodo={addTodo} />
        
        <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
