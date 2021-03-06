import React from 'react';

// our form component
const Form = ({setFilter,setInputText, todos, setTodos, inputText}) => {
    // here we could write a javascript code and functions
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }


    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText('');


    }

    const filterHandler = (e) =>{
        setFilter(e.target.value);
    }

    return (
        <form>
            <input
                onChange={inputTextHandler}
                value={inputText}
                type="text"
                className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={filterHandler} name="todos" className="filter-todo">
                    <option value="all">
                        All
                    </option>
                    <option value="completed">
                        Completed
                    </option>
                    <option value="uncompleted">
                        Uncompleted
                    </option>
                </select>
            </div>
        </form>
    );

};


export default Form;