import QuickLinks  from './components/QuickLinks.jsx' 
import Projects from "./components/Projects.jsx"
import Layout from "./components/Layout.jsx"
import AboutMe from "./components/AboutMe.jsx"
import Home from "./components/Home.jsx"
import './index.css'
import {useEffect} from 'react'
function App() {

  useEffect(() => {
  const preload = async (src) => {
    const video = document.createElement('video');
    video.src = src;
    video.preload = 'auto';
    video.load();
  };

  preload('/assets/climbing1.mp4');
  preload('/assets/climbing2.mp4');
}, []);

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
