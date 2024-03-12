import "./App.css"
import { ComputedComponent } from "./components/ComputedComponent"
import { Setname } from "./components/Setname"
import { Showname } from "./components/Showname"

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="main-container">
        <Setname />
        <Showname />
        <ComputedComponent />
      </div>
    </>
  )
}

export default App
