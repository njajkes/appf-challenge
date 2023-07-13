import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "../entities";

export const initTodo = createAsyncThunk<Todo[], void>(
  "todos-slice/initTodo",
  (_) => {
    if (typeof window === "undefined") {
      throw new Error("client only");
    }

    // hardcoding constants is a worst practice.
    // however, in such a small project
    // I can debug this with ease
    const rawTodos = localStorage.getItem("todos");

    console.log(rawTodos);
    if (!rawTodos) {
      localStorage.setItem("todos", JSON.stringify([]));
      return [];
    }

    try {
      return JSON.parse(rawTodos);
    } catch (e) {
      console.warn(e);
      return [];
    }
  }
);
