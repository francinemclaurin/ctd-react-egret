import React from 'react';

function AddTodoForm (props) {
    function handleAddTodo(event) {
      event.preventDefault();
      const todoTitle = event.target.title.value;  
      console.log(todoTitle);
      props.onAddTodo(todoTitle);
      event.target.reset();
    }
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor='todoTitle'>Title: </label>
                <input type='text' name='title' id='todoTitle' />
                <button type='submit'>Add</button>
        
            </form>
        </div>
    );
}

export default AddTodoForm;