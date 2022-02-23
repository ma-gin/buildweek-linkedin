import "./App.css"
import MyNavbar from "./components/MyNavbar"
import MainSection from "./components/MainSection"
import MyFooter from "./components/MyFooter"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <MainSection />
      <MyFooter />
    </BrowserRouter>
  )
}

export default App
