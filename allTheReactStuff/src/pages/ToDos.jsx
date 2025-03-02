import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import '../components/Note.css';

const ToDos = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, { text: inputValue, id: Date.now() }]);
            setInputValue('');
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <NavBar />
            <main>
                <div className="note-container">
                    <form onSubmit={handleSubmit} className="note">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Add a new todo..."
                            className="todo-input"
                        />
                        <button type="submit">Add Todo</button>
                    </form>
                    {todos.map((todo) => (
                        <div key={todo.id} className="note">
                            <div className="note-info">
                                <p className="note-content">{todo.text}</p>
                            </div>
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ToDos;
