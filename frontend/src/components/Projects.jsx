import "../styling/Projects.css"
import Flicks from "../assets/Flicks.jpg"
import BidlyAuctions from "../assets/BidlyAuctionsMain.jpg"
import {useState} from 'react'

function Projects(){
	const [currentProject, setCurrentProject] = useState(1);
	
	var project = [
		["BidlyAuctions",BidlyAuctions,"BidlyAuctions is a full-stack auction-based e-commerce platform designed to facilitate online bidding in two formats: Forward Auctions and Dutch Auctions. Built with a layered architecture using modern web framework","BidlyAuctions link"],
		["Flicks",Flicks,"Flicks is a personalized movie recommendation website that helps users discover films tailored to their unique tastes. It combines user preferences and AI to generate smart, adaptive recommendations that improve over time. ","https://flicks-frontend-production.up.railway.app/"],
	]

	function nextProject(){
			setCurrentProject( currentProject === project.length - 1? 0 : currentProject + 1 )
	}

	function prevProject(){
			setCurrentProject( currentProject === 0 ? project.length - 1 : currentProject - 1 )
	}

	const ProjectIndex = () =>{
		return(
			<div className="container">
		      {project.map((item, index) => (
		        <span key={index}  className={`item ${index === currentProject ? "highlighted-dot" : "dot"}`}></span>
		      ))}
		    </div>
		)
	}

	const ProjectImage = () =>{
		var imagePath = project[currentProject][1]
		var title = project[currentProject][0]
		return(
			<div className="project-image">
				<img src={imagePath} alt={title} className="img"></img>
			</div>
		)
	}

	const ProjectDescription = () =>{
		var title = project[currentProject][0]
		var description = project[currentProject][2]
		var link = project[currentProject][3]
		return(
			<div className="project-description">
				<h1>{title}</h1>
				<p className="description-format">{description}</p>
				<link href={link}></link>
			</div>
		)
	}

	return(
			<section id="projects">
			<div className="project-container">
				<h1>Some of my previous projects</h1>
					<div className="project-image-container">
						<div className="project-container-top">
							<button onClick={prevProject} className="prev-button">
								<svg width="15" height="15" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							  	<path d="M10.5 4.5L3 12m0 0l7.5 7.5M3 12h18" strokeLinejoin="round" strokeLinecap="round"></path>
								</svg>
							</button>
							<ProjectImage/>	
							<ProjectDescription/>					
							<button onClick={nextProject} className="next-button">
							  <svg width="15" height="15" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round"></path>
							</svg>
							</button>	
						</div>
						<div className="project-container-bottom">	
							<ProjectIndex/>
						</div>
					</div>
			</div>
		</section>
	)
}

export default Projects;