import { PayloadAction } from "@reduxjs/toolkit";
import { TodosSliceState } from "./todos-state";
import { Todo } from "../entities";

interface DeleteTodoPayload {
  id: Todo["id"];
}

export const deleteTodo = (
  state: TodosSliceState,
  action: PayloadAction<DeleteTodoPayload>
) => {
  state.todos = state.todos.filter((el) => el.id !== action.payload.id);
};
