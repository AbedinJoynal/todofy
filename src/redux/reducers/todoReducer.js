const initialState = {
    todos: [],
    deletedTodos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_TODOS':
            return { ...state, todos: action.payload };
        case 'ADD_TODO':
            return { ...state, todos: [...state.todos, action.payload] };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case 'DELETE_TODO':
            const deletedTodo = state.todos.find(
                (todo) => todo.id === action.payload
            );
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
                deletedTodos: [...state.deletedTodos, deletedTodo],
            };
        default:
            return state;
    }
};

export default todoReducer;
