import { PayloadAction } from "@reduxjs/toolkit";
import { TodoFilters } from "../entities";
import { TodosSliceState } from "./todos-state";

interface ChangeFilterPayload {
  filter: TodoFilters;
}

export const changeFilter = (
  state: TodosSliceState,
  action: PayloadAction<ChangeFilterPayload>
) => {
  state.filter = action.payload.filter;
};
