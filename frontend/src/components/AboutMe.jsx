import "../styling/AboutMe.css"
import LanguagesAndTools from "./LanguagesAndTools.jsx"
import {useState, useEffect} from "react"

function AboutMe(){
	
	const [currentIndex, setCurrentIndex] = useState(0)

	const aboutMeSections = ["one section aobut me as a person ","section about what i am learning and want to learn"]

	us


	function setCurrent(){
		setCurrentIndex( currentIndex >= aboutMeSections.length - 1? 0 : currentIndex + 1 )
	}

	setTimeout(setCurrent, 10000)

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
		</div>
		<LanguagesAndTools/>
		</section>
	)
}

export default AboutMe;