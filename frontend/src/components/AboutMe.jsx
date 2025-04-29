import "../styling/AboutMe.css"
import LanguagesAndTools from "./LanguagesAndTools.jsx"
import {useState, useEffect} from "react"

function AboutMe(){
	
	const [currentIndex, setCurrentIndex] = useState(0)
	const [progress, setProgress] = useState(0)

	const aboutMeSections = ["one section aobut me as a person ","section about what i am learning and want to learn"]

	function setCurrent(){
		setCurrentIndex( currentIndex >= aboutMeSections.length - 1? 0 : currentIndex + 1 )
	}
	/*
	useEffect(()=>{
		incrementBar()
	})
	*/
	function incrementBar(){
		if(progress === 10000){
			setCurrent()
		}
		setProgress( progress === 10000 ? 0 : progress + 1)

	}

	const ProgressBar = () =>{
		var array = []
		var element = <span></span>
		for (let i  = 0; i < progress ;i = i +10){
			if (i === 0){
				(i) => {
					 element = <span key={i} className="start-component"></span>
				}

			}
			else if (i === progress - 1){
				//creates the end rounded point
				(i) => {
					 element = <span key={i} className="end-component"></span>
				}
			}
			else{
				// creates middle points
				(i) => {
						 element = <span key={i} className="component"></span>
				}
			}
			array[i] = element
		}

		return(
			<div className="progress-bar">
				{array}
			</div>
		)
	}

	const AboutMeDescriptions = () =>{
		var text = aboutMeSections[currentIndex]
		return(
			<div>
				<p>{text}</p>
				<div></div>
			</div>
		)
	}
	
	return(
		<section id="about">
		<div className="aboutme-container">
			<div className="description-container">
				<AboutMeDescriptions/>
			</div>
			<ProgressBar/>
			<LanguagesAndTools/>
		</div>	
		</section>
	)
}

export default AboutMe;