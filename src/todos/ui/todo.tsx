import { useDispatch } from "react-redux";
import { Todo as TodoEntity } from "../entities";
import { deleteTodo, toggleTodo } from "../lib";
import { useState } from "react";
import Image from "next/image";

interface TodoProps extends TodoEntity {}

export const Todo = ({ id, status, text, time }: TodoProps) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const toggle = () => {
    dispatch(toggleTodo({ id }));
  };
  const trash = () => {
    dispatch(deleteTodo({ id }));
  };

  const date = new Date(time).toLocaleString("en-US");

  return (
    <div className="flex flex-row gap-3 items-center w-full bg-neutral-200 dark:bg-neutral-800 px-2 py-2 rounded shadow">
      <div className="flex flex-col min-w-[30%] max-w-[30%]">
        <div className="flex flex-row justify-between pr-3">
          <div className="flex justify-center items-center">#{id}</div>
          <input
            name={`check-${id}`}
            type="checkbox"
            checked={status === "complete"}
            onChange={toggle}
          />
        </div>
        <div className="text-xs font-light">{date}</div>
      </div>
      <div
        className="overflow-x-hidden text-ellipsis transition-all duration-500 text-sm w-full"
        style={{
          height: show ? "auto" : "1.5rem",
          whiteSpace: show ? "pre-line" : "nowrap",
          wordWrap: "break-word",
        }}
        onClick={() => setShow((prev) => !prev)}
      >
        {status === "complete" ? <s>{text}</s> : text}
      </div>
      <button
        className="bg-red-300 hover:bg-red-400 dark:bg-red-800 dark:hover:bg-red-900 bg-opacity-70 transition-all ease-in-out p-1 rounded-lg shrink-0"
        onClick={trash}
      >
        <Image src="/trash.svg" alt="delete" height={24} width={24} />
      </button>
    </div>
  );
};
