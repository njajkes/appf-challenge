import { todosSliceReducer } from "@/todos/lib";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const makeStore = () =>
  configureStore({
    reducer: {
      todos: todosSliceReducer,
    },
    devTools: true,
    middleware: (getInitialMiddlewares) => getInitialMiddlewares(),
  });

export type Store = ReturnType<typeof makeStore>;
export type State = ReturnType<Store["getState"]>;
export type AppDispatch = Store["dispatch"];

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export const wrapper = createWrapper<Store>(makeStore);
