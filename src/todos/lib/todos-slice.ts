import { createSlice } from "@reduxjs/toolkit";
import { TodosSliceState } from "./todos-state";
import { addTodo as addTodoReducer } from "./add-todo";
import { deleteTodo as deleteTodoReducer } from "./delete-todo";
import { toggleTodo as toggleTodoReducer } from "./toggle-todo";
import { changeFilter as changeFilterReducer } from "./change-filter";
import { initTodo } from "./init-todo";
import { saveTodo } from "./save-todo";

const initialState: TodosSliceState = {
  todos: [],
  filter: "all",
};

const todosSlice = createSlice({
  name: "todos-slice",
  initialState,
  reducers: {
    addTodoReducer,
    deleteTodoReducer,
    toggleTodoReducer,
    changeFilterReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(initTodo.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

export const todosSliceReducer = todosSlice.reducer;
export const {
  addTodoReducer: addTodo,
  deleteTodoReducer: deleteTodo,
  toggleTodoReducer: toggleTodo,
  changeFilterReducer: changeFilter,
} = todosSlice.actions;
