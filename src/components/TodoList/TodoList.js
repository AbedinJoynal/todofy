import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from '../TodoItem/TodoItem';
import Navigation from '../Navigation/Navigation';
import useTodos from '../../hooks/useTodos';

const TodoList = () => {
    const { todos, deletedTodos, add, toggle, remove } = useTodos();
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('all');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            add({ id: Date.now(), text: input, completed: false });
            setInput('');
        }
    };

    const filteredTodos = () => {
        switch (filter) {
            case 'completed':
                return todos.filter((todo) => todo.completed);
            case 'remaining':
                return todos.filter((todo) => !todo.completed);
            case 'deleted':
                return deletedTodos;
            default:
                return todos;
        }
    };

    return (
        <div className="todo-list">
            <h1>Todofy</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button type="submit">Add</button>
            </form>
            <Navigation filter={filter} setFilter={setFilter} />
            <ul>
                {filteredTodos().map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={() => toggle(todo.id)}
                        onDelete={() => remove(todo.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
