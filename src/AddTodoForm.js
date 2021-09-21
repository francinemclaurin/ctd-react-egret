import React, {useState} from 'react'


function AddTodoForm (props) {
    const [todoTitle, setTodoTitle] = useState('');
    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }
    function handleAddTodo(event) {
      event.preventDefault();
     
     
      console.log(todoTitle);
      props.onAddTodo(
          {title:todoTitle,
            id: Date.now()
          },
      );
      setTodoTitle('')
    }
    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <label htmlFor='todoTitle'>Title: </label>
                <input type='text' name='title' id='todoTitle' value={todoTitle} onChange={handleTitleChange} />
                <button type='submit'>Add</button>
        
            </form>
        </div>
    );
}

export default AddTodoForm;