import "./App.css"
// import Intro from "./Intro"
// import Warper from "./Warper"

// import { useCookies } from "react-cookie"
import Splash from "./Splash"
import Home from "./Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./Main"
import Content from "./Content"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
