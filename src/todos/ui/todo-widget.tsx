import { useDispatch } from "react-redux";
import { TodoFilter } from "./todo-filter";
import { TodoInput } from "./todo-input";
import { TodoList } from "./todo-list";
import { useEffect } from "react";
import { initTodo } from "../lib/init-todo";
import { saveTodo } from "../lib/save-todo";
import { AppDispatch } from "@/shared/store";

export const TodoWidget = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(initTodo());
    window.addEventListener("beforeunload", () => dispatch(saveTodo()));
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 w-full md:max-w-[516px] items-center">
        <div className="flex flex-col w-full gap-3">
          <TodoInput />
          <TodoFilter />
        </div>
        <TodoList />
      </div>
    </div>
  );
};
