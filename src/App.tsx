import "./App.css"
import { Setname } from "./components/Setname"
import { Showname } from "./components/Showname"

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="main-container">
        <Setname />
        <Showname />
      </div>
    </>
  )
}

export default App
