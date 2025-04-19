import "../styling/AboutMe.css"
import {useState} from "react"
function AboutMe(){

	const text = {
		fontSize: "20px", // figurefont size stuff
	}
	const {currentIndex, setCurrentIndex} = useState(0)
	
	const aboutMeSections = ["one section aobut me as a person ","section about what i am learning and want to learn"]

	const AboutMeDescriptions = () =>{
		return(
			<div>
				<p>{aboutMeSections[currentIndex]}</p>
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
		</section>
	)
}

export default AboutMe;