import { useTodos } from "../lib";
import { Todo } from "./todo";

export const TodoList = () => {
  const todos = useTodos();

  return (
    <div className="flex flex-col items-center w-full md:w-[480px] gap-2">
      {todos.map((el) => (
        <Todo {...el} key={el.id} />
      ))}
    </div>
  );
};
