import "../styling/AboutMe.css"
import LanguagesAndTools from "./LanguagesAndTools.jsx"
import {useState, useEffect, useRef} from "react"

function AboutMe(){
	
	const [currentIndex, setCurrentIndex] = useState(0)
	const [count, setCount] = useState(0)
	const startTime = useRef(new Date().getMilliseconds())
	const time = useRef(new Date().getMilliseconds())
	const aboutMeSections = [
		" Hello my name is Isaiah Ashton-Kenny, I am a software engineering student, with a love for all things"
		+"software, music and outdoors. When I am not throwing myself at some new idea or struggling to learn something"
		+"embarrassingly simple. You can find me outside running, riding my bike or climbing rocks",
		" Currently I am sharpening my skills in full-stake development by working on [add a project with enzo]\n" 
		+" with the focus being on becoming more familiar the dev-ops and the development lifecycle \n"
		+" and  a game using the programming language Odin to improve performance and data oriented design \n"
	]
	function setCurrent(){
		setCurrentIndex(prevIndex => prevIndex === aboutMeSections.length -1 ? 0 : prevIndex + 1)
	}
	
	function incrementCount(){
		setCount(prevCount => prevCount === 400 ? 0 : prevCount + 1)
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			time.current = new Date().getMilliseconds()
			if (time.current < 25){
				startTime.current = new Date().getMilliseconds()
			}
			var diff = time.current - startTime.current
			if(diff >= 25){
				incrementCount()
				startTime.current = time.current
			}
		}, 1)
		return () => clearInterval(intervalId)
	},[count]);

	useEffect(() => {
		if(count == 400){
			setCurrent()
			setCount(0)
		}
	},[count])

	const ProgressBar = () =>{
		return (
	    <div className="progress-bar">
	      {[...Array(count)].map((_, i) => (
	        <span key={i} className={`item ${ i ===0 && i >= count - 1 ? "start-end-component" : i === 0 ? "start-component" : i === count - 1 ? "end-component": "component"}`}></span>
	      ))}
	    </div>
	  );	
	}

	const AboutMeDescriptions = () =>{
		var text = aboutMeSections[currentIndex]
		return(
			<div className="description-container">
				<p className="description">{text}</p>
			</div>
		)
	}
	
	return(
		<section id="about">
			<div className="aboutme-container">				
				<AboutMeDescriptions/>
				<ProgressBar/>
				<LanguagesAndTools/>
			</div>	
		</section>
	)
}

export default AboutMe;