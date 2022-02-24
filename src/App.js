import "./App.css"
import MyNavbar from "./components/MyNavbar"
import MainSection from "./components/MainSection"
// import MyFooter from "./components/MyFooter"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewsMain from "./components/NewsMain"

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<NewsMain />} />
        <Route path="/profile/:profileId" element={<MainSection />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
