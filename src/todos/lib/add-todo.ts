import { PayloadAction } from "@reduxjs/toolkit";
import { TodosSliceState } from "./todos-state";
import { Todo } from "../entities";

interface AddTodoPayload {
  text: Todo["text"];
  time: Todo["time"];
}

export const addTodo = (
  state: TodosSliceState,
  action: PayloadAction<AddTodoPayload>
) => {
  const { text, time } = action.payload;

  state.todos.push({
    id: Math.max(0, ...state.todos.map((el) => el.id)) + 1,
    status: "todo",
    time,
    text,
  });
};
