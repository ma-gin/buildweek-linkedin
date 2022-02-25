import "./App.css"
import MyNavbar from "./components/MyNavbar"
import MainSection from "./components/MainSection"
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NewsMain from "./components/NewsMain"

function App() {
  const [img, setImg] = useState()
  const [fet, setFet] = useState()
  // useEffect(changeImg)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    imageRendered = !imageRendered
  })

  let imageRendered = true

  const changeImg = (value) => {
    setImg(value)
    // console.log(value)
  }

  const changeFet = (value) => {
    setFet(value)
  }

  return (
    <BrowserRouter>
      {imageRendered ? (
        <MyNavbar image={img} funcD={fet} />
      ) : (
        <MyNavbar funcD={fet} />
      )}
      <Routes>
        <Route path="/" element={<NewsMain changeImg={changeImg} />} />
        <Route
          path="/profile/:profileId"
          element={<MainSection fetchD={changeFet} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
