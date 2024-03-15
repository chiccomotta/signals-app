import { IAction, IInitialState } from "../components/ReducerComp"

export const reducer = (state: IInitialState, action: IAction) => {
  let newState
  switch (action.type) {
    case "inc":
      newState = { counter: state.counter + 1 }
      break
    case "dec":
      newState = { counter: state.counter - 1 }
      break
    case "add_custom":
      newState = { counter: state.counter + action.number }
      break
    case "res":
      newState = { counter: 0 }
      break

    default:
      console.error("action not found.")
  }
  return newState
}
