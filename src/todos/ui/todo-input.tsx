import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../lib";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo({ text, time: Date.now() }));
      setText("");
    }
  };

  return (
    <form
      onSubmit={add}
      className="flex flex-row justify-between items-center gap-4"
    >
      <input
        value={text}
        onChange={change}
        className="px-3 py-2 bg-neutral-400 dark:bg-neutral-800 placeholder:text-neutral-600 w-full shadow-md"
        placeholder="Tap new todo here..."
      />
      <button className="shrink-0">Add Todo</button>
    </form>
  );
};
