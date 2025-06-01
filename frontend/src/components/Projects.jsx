import "../styling/Projects.css"
import Flicks from "../assets/Flicks.jpg"
import BidlyAuctions from "../assets/BidlyAuctionsMain.jpg"
import {useState, useEffect} from 'react'

function Projects(){
	const [currentProject, setCurrentProject] = useState(1);
	const [isOpen,setIsOpen] = useState(false)
	const [flexState, setFlexState] = useState('center')
	
	useEffect(() =>{
		if(isOpen){
			setFlexState('flex-start')
		}else{
			setFlexState('center')
		}
	}
	,[isOpen])
	
	var project = [
		["BidlyAuctions",BidlyAuctions,"BidlyAuctions is a full-stack auction-based e-commerce platform designed to facilitate online bidding in two formats: Forward Auctions and Dutch Auctions. Built with a layered architecture using modern web framework","BidlyAuctions link",["SpringBoot","HTML","CSS","JAVA","DOCKER","Rabbitmq","Kubernetes","Postgresql","JUnit"]],
		["Flicks",Flicks,"Flicks is a personalized movie recommendation website that helps users discover films tailored to their unique tastes. It combines user preferences and AI to generate smart, adaptive recommendations that improve over time. ","https://flicks-frontend-production.up.railway.app/",["React","JS","HTML","CSS","Python","POSTMAN","Docker","MongoDB","Railways"]],
	]

	function nextProject(){
			setCurrentProject( currentProject === project.length - 1? 0 : currentProject + 1 )
			setIsOpen(false)
	}

	function prevProject(){
			setCurrentProject( currentProject === 0 ? project.length - 1 : currentProject - 1 )
			setIsOpen(false)
	}

	const ProjectIndex = () =>{
		return(
			<div className="dot-container">
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
			<div className="project-image-outer-border">
				<div className="project-image-rotation"></div>
				<div className="project-image-container">
					<img src={imagePath} alt={title} className="project-image" onMouseOver={() => setIsOpen(true)}></img>
				</div>	
			</div>
		)
	}

	const LanguagesAndTools = () =>{
		const languagesAndTools = project[currentProject][4]
		return(
			<div className="languages-and-tools-container">
				{languagesAndTools.map((item, index) => (
				<div className="languages-and-tools-border">
					<div className="languages-and-tools-rotation"></div>
					<div className="languages-and-tools" key={index}>{item}</div>					
				</div>
			))}	
			</div>
		)
	}

	const ProjectDescription = ({isOpen}) =>{
		var title = project[currentProject][0]
		var description = project[currentProject][2]
		var link = project[currentProject][3]
		if(!isOpen){
			return null
		}
		return(
			<div className="project-description" onMouseOver={() => setIsOpen(true)}>
				<h1>{title}</h1>
				<div className="project-description-container">
					<p className="description-text">{description}</p>
				</div>
				<link href={link} className="description-link"></link>
				<LanguagesAndTools/>
			</div>
		)
	}

	const PreviousButton = ({isOpen}) => {
		if(isOpen)
			return null
		return(
			<button onClick={prevProject} className="prev-button">
				<svg width="15" height="15" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			  	<path d="M10.5 4.5L3 12m0 0l7.5 7.5M3 12h18" strokeLinejoin="round" strokeLinecap="round"></path>
				</svg>
			</button>
		)
	}
	const NextButton = ({isOpen}) => {
		if(isOpen)
			return null
		return(
			<button onClick={nextProject} className="next-button">
				  <svg width="15" height="15" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round"></path>
				</svg>
			</button>
		)
	}

	return(	
		<section id="projects">
			<h1 className="projects-title">Some of my previous projects</h1>
			<div className="main-container">
				<div className="project-background">
					<div className="project-background-side"></div>
					<div className="project-background-center"></div>
					<div className="project-background-side"></div>	
				</div>	
				<div className="silk-background">
					<div className="silk-wave wave1"></div>
				    <div className="silk-wave wave2"></div>
				    <div className="silk-wave wave3"></div>
				</div>
				<div className="project-container">
					<div className="project-container-top" style={{ alignItems: `${flexState}`}}  onMouseLeave={() => setIsOpen(false)}>
						<PreviousButton isOpen={isOpen}/>
						<ProjectDescription isOpen={isOpen}/>
						<ProjectImage/>						
						<NextButton isOpen={isOpen}/>	
					</div>					
					<ProjectIndex/>				
				</div>
			</div>
		</section>
	)
}

export default Projects;