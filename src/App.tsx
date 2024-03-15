import "./App.css"
import { ComputedComponent } from "./components/ComputedComponent"
import ReducerComp from "./components/ReducerComp"
import { Setname } from "./components/Setname"
import ShowRedComp from "./components/ShowRedComp"
import { Showname } from "./components/Showname"

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="main-container">
        <Setname />
        <Showname />
        <ComputedComponent />
        <ReducerComp />
        <ShowRedComp />
      </div>
    </>
  )
}

export default App
