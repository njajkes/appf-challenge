import { Todo, TodoFilters } from "../entities";

export interface TodosSliceState {
  todos: Todo[];
  filter: TodoFilters;
}
