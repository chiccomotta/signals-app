import { useReducer } from "react"
import { reducer } from "../reducer/reducer"

export interface IInitialState {
  counter: number
}

export interface IAction {
  type: string
  number: number
}

const ReducerComp = () => {
  // initial state
  const initialState = {
    counter: 0,
  }

  const action = {
    type: "add_custom",
    number: 2,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div>{state?.counter}</div>
      <br />
      <div>
        <button style={{ color: "blue", borderColor: "black" }} onClick={() => dispatch(action)}>
          Increment + 2
        </button>
      </div>
    </>
  )
}

export default ReducerComp
