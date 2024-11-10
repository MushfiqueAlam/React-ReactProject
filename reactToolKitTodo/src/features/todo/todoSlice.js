import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello world" }] // Initial state with a todos array
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState, // Use the initialState defined above
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), // Generate a unique ID
                text: action.payload
            };
            state.todos.push(todo); // Push the new todo into the todos array
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload); // Filter out the todo to be removed
        },
    }
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;