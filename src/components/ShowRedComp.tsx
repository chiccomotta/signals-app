import { useReducer } from "react"
import { reducer } from "../reducer/reducer"

// initial state
const initialState = {
  counter: 0,
}

const ShowRedComp = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <div style={{ backgroundColor: "red" }}>Counter with reducer: {state?.counter}</div>
    </>
  )
}

export default ShowRedComp
