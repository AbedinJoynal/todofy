import { useSelector, useDispatch } from 'react-redux';
import {
    addTodo,
    toggleTodo,
    deleteTodo,
    loadTodos,
} from '../redux/actions/todoActions';
import { useEffect } from 'react';

const useTodos = () => {
    const todos = useSelector((state) => state.todo.todos);
    const deletedTodos = useSelector((state) => state.todo.deletedTodos);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        dispatch(loadTodos(storedTodos));
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const add = (todo) => dispatch(addTodo(todo));
    const toggle = (id) => dispatch(toggleTodo(id));
    const remove = (id) => dispatch(deleteTodo(id));

    return { todos, deletedTodos, add, toggle, remove };
};

export default useTodos;
