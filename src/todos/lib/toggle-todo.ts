import { PayloadAction } from "@reduxjs/toolkit";
import { TodosSliceState } from "./todos-state";
import { Todo } from "../entities";

interface ToggleTodoPayload {
  id: Todo["id"];
}

export const toggleTodo = (
  state: TodosSliceState,
  action: PayloadAction<ToggleTodoPayload>
) => {
  const candidate = state.todos.find((el) => el.id === action.payload.id);

  if (!candidate) return;

  candidate.status = candidate.status === "complete" ? "todo" : "complete";
};
