import { State } from "@/shared/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const saveTodo = createAsyncThunk(
  "todos-slice/saveTodo",
  (_, { getState }) => {
    if (typeof window === "undefined") {
      throw new Error("client only");
    }

    // hardcoding constants is a worst practice.
    // however, in such a small project
    // I can debug this with ease
    const todos = (getState() as State).todos.todos;
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
);
