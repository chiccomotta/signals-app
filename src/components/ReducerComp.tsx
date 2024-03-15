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
    type: "inc",
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div>{state?.counter}</div>
      <br />
      <div>
        <button style={{ color: "blue", borderColor: "black" }} onClick={() => dispatch(action)}>
          Increment
        </button>
      </div>
    </>
  )
}

export default ReducerComp
