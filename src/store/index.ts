import { createStore as createReduxStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";
import { State } from "./state";
import { Action } from "./action";
import { Compiler } from "../compiler";
import { createMiddleware as createCompileMiddleware } from "./middleware/compile";
import { createMiddleware as createLogMiddleware } from "./middleware/log";

export function createStore(
  initialState: State,
  { compiler }: { compiler: Compiler }
) {
  return createReduxStore<State, Action, {}, {}>(
    reducer,
    initialState,
    applyMiddleware(createCompileMiddleware(compiler), createLogMiddleware())
  );
}