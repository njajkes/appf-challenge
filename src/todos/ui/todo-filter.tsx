import { useAppSelector } from "@/shared/store";
import { TodoFilters } from "../entities";
import { useDispatch } from "react-redux";
import { changeFilter } from "../lib";

const TodoFilterOption = ({ value }: { value: TodoFilters }) => {
  return <option value={value}>{value}</option>;
};

export const TodoFilter = () => {
  const currentFilter = useAppSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  const changeTodo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeFilter({ filter: e.target.value as TodoFilters }));
  };

  return (
    <select
      className="bg-neutral-400 dark:bg-neutral-800 px-3 py-2 shadow-md"
      value={currentFilter}
      onChange={changeTodo}
    >
      <TodoFilterOption value="all" />
      <TodoFilterOption value="complete" />
      <TodoFilterOption value="todo" />
    </select>
  );
};
