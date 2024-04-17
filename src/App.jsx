//./src/App.jsx

import Card from "./components/Card"
import List from "./components/List"
import "./app.scss"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <h1>People</h1>
      <List />
    </>
  )
}

export default App
