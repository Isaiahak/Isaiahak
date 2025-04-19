import QuickLinks  from './components/QuickLinks.jsx' 
import Projects from "./components/Projects.jsx"
import Layout from "./components/Layout.jsx"
import AboutMe from "./components/AboutMe.jsx"
import Home from "./components/Home.jsx"

function App() {

  return (
    <Layout>
      <Home id="/"/>
      <AboutMe id="/about"/>
      <Projects id="/project"/>
      <QuickLinks/>
    </Layout>
  )
}

export default App
