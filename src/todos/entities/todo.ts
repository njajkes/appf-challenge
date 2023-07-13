import { TodoStatus } from "./todo-status";

export interface Todo {
  id: number;
  time: number;
  status: TodoStatus;
  text: string;
}
