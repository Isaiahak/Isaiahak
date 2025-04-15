import {Routes, BrowserRouter,Route } from 'react-router-dom'
import QuickLinks  from './components/QuickLinks.jsx' 
import Projects from "./components/Projects.jsx"
import Layout from "./components/Layout.jsx"
import AboutMe from "./components/AboutMe.jsx"
import Home from "./components/Home.jsx"
import NoPage from "./components/NoPage.jsx"

function App() {

  return (
    <BrowserRouter>     
      <Routes> 
        <Route path="/" element={<Layout/>}/>
        <Route index element ={<Home/>}/>
        <Route path="aboutme" element={<AboutMe/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="links" element={<QuickLinks/>}/>
        <Route path="*" element={<NoPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
