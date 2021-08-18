import React from 'react';
let todoList = [
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
function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <ul> 
        {
          todoList.map((item) => {
            return (<li key = {item.id}>{item.title}</li>)
          })
        }  
      </ul>
    </div>
  );
}

export default App;
