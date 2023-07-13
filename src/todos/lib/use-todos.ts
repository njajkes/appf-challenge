import { State, useAppSelector } from "@/shared/store";

const todosSelector = (state: State) =>
  state.todos.filter === "all"
    ? state.todos.todos
    : state.todos.todos.filter((el) => el.status === state.todos.filter);

export const useTodos = () => {
  return useAppSelector(todosSelector);
};
