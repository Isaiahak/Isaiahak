import "../styling/AboutMe.css"
import LanguagesAndTools from "./LanguagesAndTools.jsx"
import {useState, useEffect, useRef} from "react"

function AboutMe(){
	
	const [currentIndex, setCurrentIndex] = useState(0)
	const [scrollPosition, setScrollPosition] = useState(0)
	const startTime = useRef(new Date().getSeconds())
	const time = useRef(new Date().getSeconds())
	const aboutMeSections = [
		" Hello my name is Isaiah Ashton-Kenny, I am a software engineering student learning full-stack development.",
		"When I am not programming, You can find me outside running, riding my bike or climbing rocks",
		" Currently I tackling full-stack development by working on a set of online party games\n" 
		+" to be hosted online for my friends to play!\n" 
	]
	// can add a section on education 

	const aboutMeSectionImages = ["image1","image2","image3"]

	function setCurrent(){
		setCurrentIndex(prevIndex => prevIndex === aboutMeSections.length -1 ? 0 : prevIndex + 1)
	}
	
	const handleScroll = () => {
		const position =  (window.pageYOffset) / (window.innerHeight)
		setScrollPosition(position)
		document.documentElement.style.setProperty('--scroll', position)
	}
	
	useEffect(() => {
		handleScroll()
		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, [])
	
	useEffect(() => {
		const intervalId = setInterval(() => {
			time.current = new Date().getSeconds()
			if (time.current < 5){
				startTime.current = new Date().getSeconds()
			}
			var diff = time.current - startTime.current
			if(diff >= 5){
				setCurrent()
				startTime.current = time.current
			}
		}, 1000)
		return () => clearInterval(intervalId)
	},[]);

	
	const ProgressBar = () =>{
		return (
	    <div className="progress-bar"/>
	  )	
	}

	
	const AboutMeDescriptions = () =>{
		var text = aboutMeSections[currentIndex]
		var image = aboutMeSectionImages[currentIndex]
		return(
			<div className="main-description-container">
				<div className="description-image-container">
					<h1 className="description-image-placeholder">{image}</h1>
				</div>
				<div className="description-container">
					<p className="description">{text}</p>
					<ProgressBar/>
				</div>
			</div>
		)
	}
	
	return(
		<section id="about">
			<div className="aboutme-container">
				<div className="aboutme-intro-container"
				style={{ opacity: scrollPosition}}>
					<h1 className="aboutme-intro">Here's a little bit about me</h1>		
				</div>
				<div className="aboutme-main-container">	
				<AboutMeDescriptions/>
				<LanguagesAndTools/>
				</div>
			</div>	
		</section>
	)
}

export default AboutMe;