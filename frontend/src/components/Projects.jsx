import Flicks from "../assets/Flicks.jpg"
import FlicksSearchPage from "../assets/FlickSearchPage.png"
import FlicksMoviePage from "../assets/FlicksMoviePage.png"
import BidlyAuctions from "../assets/BidlyAuctionsMain.jpg"
import BidlyAuctionPage from "../assets/BidlyAuctions.jpg"
import PartyGames from "../assets/PartyGames.png"
import PartyGamesLobbies from "../assets/PartyGamesLobbies.png"
import PartyGamesLobby from "../assets/PartyGamesLobby.png"
import {useState, useEffect, useRef, useMemo} from 'react'

function Projects(){
	const [currentProject, setCurrentProject] = useState(0)
	const [currentProjectImage, setCurrentProjectImage] = useState(0)
	const [isOpen,setIsOpen] = useState(false)
	const [mainPageState, setMainPageState] = useState('translation')
	const startTime = useRef(new Date().getSeconds())
	const time = useRef(new Date().getSeconds())

	function nextProject(){
			setCurrentProject( currentProject === project.length - 1? 0 : currentProject + 1 )
			setIsOpen(false)
	}

	function prevProject(){
			setCurrentProject( currentProject === 0 ? project.length - 1 : currentProject - 1 )
			setIsOpen(false)
	}

	var project = [
		["BidlyAuctions",BidlyAuctions,"BidlyAuctions is a full-stack auction-based e-commerce platform designed to facilitate online bidding in two formats: Forward Auctions and Dutch Auctions. Built with a layered architecture using modern web framework","BidlyAuctions link",["SpringBoot","HTML","CSS","JAVA","DOCKER","Rabbitmq","Kubernetes","Postgresql","JUnit"]],
		["Flicks",Flicks,"Flicks is a personalized movie recommendation website that helps users discover films tailored to their unique tastes. It combines user preferences and AI to generate smart, adaptive recommendations that improve over time. ","https://flicks-frontend-production.up.railway.app/",["React","JS","HTML","CSS","Python","POSTMAN","Docker","MongoDB","Railways"]],
		["PartyGames",PartyGames,"Party Games is the temporary name for my online library of parties game for friends, add more later.","Party Games link",["React","JS","HTML","CSS","Python","Go","POSTMAN","Docker"]],
	]

	var moreProjectImages = [
		[BidlyAuctions,BidlyAuctionPage],
		[Flicks,FlicksSearchPage,FlicksMoviePage],
		[PartyGames,PartyGamesLobby,PartyGamesLobbies],
	]

	useEffect(() =>{
		if(isOpen){
			setMainPageState('translation')
		}else{
			setMainPageState('translation-reverse')
		}
	}
	,[isOpen])

	useEffect(() =>{
		function handleProjectImageChange(){
			setCurrentProjectImage(currentProjectImage === moreProjectImages[currentProject].length - 1 ? 0 : currentProjectImage + 1)
		}

		const intervalId = setInterval(() => {
			time.current = new Date().getSeconds()
			if (time.current < 5){
				startTime.current = new Date().getSeconds()
			}
			var diff = time.current - startTime.current
			if(diff >= 5){
				handleProjectImageChange()
				startTime.current = time.current
			}
		}, 1000)
		return () => clearInterval(intervalId)
	},[currentProjectImage,currentProject,moreProjectImages])
	
	const handleMouseLeave = (e) => {
		const target = e.relatedTarget
		if (target instanceof Node && !e.currentTarget.contains(e.relatedTarget)) {
            setIsOpen(false)
        }		
	}

	const ProjectIndex = () =>{
		return(
			<div className="flex flex-row self-center mt-4 gap-2 md:gap-[1rem] ">
		      {project.map((item, index) => (
		        <span key={index}  className={`p-1 rounded-full shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)] ${index === currentProject ? "bg-white" : "bg-gray-500"}`}></span>
		      ))}
		    </div>
		)
	}
 
	const ProjectImages = () => {
		const currentImage = useMemo(() =>{
			return moreProjectImages[currentProject][currentProjectImage]
		}, [currentProject, currentProjectImage])
		

		const title = useMemo(() =>{
			return project[currentProject][0]
		},[currentProject])

		return(
			<div className="flex flex-col max-w-[98.5%] max-h-[98%] md:w-[49.5rem] md:h-[29.5rem] overflow-hidden rounded-md bg-primary self-center justify-center place-content-center">
				<img src={currentImage} alt={title} className="h-full w-full object-fill"/>
			</div>
		)
	}

	const MainImage = () =>{
		var imagePath = project[currentProject][1]
		var title = project[currentProject][0]
		return(
			<div className="flex flex-col  max-w-[98.5%] max-h-[98%] md:w-[49.5rem] md:h-[29.5rem] bg-primary self-center rounded-md overflow-hidden justify-center place-content-center ">
				<img src={imagePath} alt={title} className="h-full w-full object-fill" onMouseOver={() => setIsOpen(true)}></img>
			</div>
		)
			
	}

	const ProjectImage = () =>{
		if (isOpen){
			return(
			<div className="relative flex w-[23rem] h-[12rem] mx-auto md:w-[45rem] md:h-[30rem] border-primary overflow-clip border-4 rounded-lg justify-center shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
				<div className="absolute w-[80rem] h-[80rem] bg-secondary z-[-1]"></div>
				<ProjectImages/>
			</div>
			)
		}
		else{
			return(
			<div className="relative flex w-[23rem] h-[15rem] mx-auto md:w-[50rem] md:h-[30rem] border-primary overflow-clip border-4 rounded-lg justify-center shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)]">
				<div className="absolute w-[80rem] h-[80rem] bg-secondary z-[-1]"></div>
				<MainImage/>
			</div>
			)
		}
		
	}

	const LanguagesAndTools = () =>{
		const languagesAndTools = project[currentProject][4]
		return(
			<div className=" w-[80%] h-[2rem] flex flex-row flex-wrap gap-2 justify-center mt-4 md:mt-4 place-content-baseline md:w-full md:h-[20rem]">
				{languagesAndTools.map((item, index) => (
				<div className="relative rounded-xl flex justify-center overflow-clip border-2 border-primary shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)] language-and-tool-hover">
					<div className="absolute -top-[30%] md:h-[15rem] md:w-[15rem] bg-secondary z-[-1]"></div>
					<div className="px-2 py-1 m-1 text-[10px] md:text-sm bg-primary rounded-md" key={index}>{item}</div>					
				</div>
			))}	
			</div>
		)
	}

	const ProjectDescription = ({isOpen}) =>{
		var description = project[currentProject][2]
		var link = project[currentProject][3]
		if(!isOpen){
			return null
		}
		return(
			<div>
				<div className="flex flex-row md:flex-col w-[23rem] self-center h-[16rem] md:w-[35rem] md:h-[30rem] rounded-md bg-secondary" onMouseOver={() => setIsOpen(true)}>
					<div className="rounded-md w-[90%] md:h-[60%] bg-primary ml-2 mt-4 mb-4">
						<p className="p-4 text-[13px] md:text-sm">{description}</p>
					</div>
					<link href={link} className=""></link>
					<LanguagesAndTools/>
				</div>
			</div>
		)
	}

	const PreviousButton = ({isOpen}) => {
		if(isOpen)
			return null
		return(
			<button onClick={prevProject} className="flex bg-secondary md:p-5 ml-4 shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)] p-2 rounded-full self-center justify-center md:border-primary-8 ">
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
			<button onClick={nextProject} className="flex bg-secondary md:p-5 mr-4 shadow-[0px_10px_20px_rgba(0,0,0,0.19),0px_6px_6px_rgba(0,0,0,0.23)] p-2 rounded-full self-center justify-center md:border-primary-8 ">
				  <svg width="15" height="15" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round"></path>
				</svg>
			</button>
		)
	}

	return(	
		<section id="projects">
			<div className ="flex flex-col w-full h-[35rem] md:w-full md:h-[55rem] mb-fill place-content-start">
				<h1 className="flex self-center text-xl my-2 md:my-[5rem] md:text-4xl">Some of my previous projects</h1>
				<div className="flex flex-col">
					{/*
						<div className="project-background">
							<div className="project-background-side"></div>
							<div className="project-background-center"></div>
							<div className="project-background-side"></div>	
						</div>	
					*/}
					<div className="abolute w-[100%] h-[100%] mx-auto z-3 overflow-hidden hidden">
						<div className="absolute t-0 l-[50%] w-[100rem] h-[100] rounded-full opacity-70 visible  wave1"></div>
						<div className="absolute t-0 l-[50%] w-[100rem] h-[100] rounded-full opacity-70 visible  wave2"></div>
						<div className="absolute t-0 l-[50%] w-[100rem] h-[100] rounded-full opacity-70 visible  wave3"></div>
					</div>
					<div onMouseOut={handleMouseLeave}>						
						<div className="flex flex-col md:w-60rem self-center">
							<div className={`flex flex-row mx-auto gap-2 mt-4 md:mt-8 md:gap-8 ${mainPageState === "translation" ? "translation" : "translation-reverse"}`}>
								<PreviousButton isOpen={isOpen}/>
								<div className='flex flex-col md:flex-row place-content-center gap-4'>
									<ProjectDescription isOpen={isOpen}/>
									<ProjectImage/>						
								</div>
								<NextButton isOpen={isOpen}/>	
							</div>					
							<ProjectIndex/>				
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects;