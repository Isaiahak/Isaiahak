import LanguagesAndTools from "./LanguagesAndTools.jsx"
import {useState, useEffect, useRef} from "react"

function AboutMe(){
	
	const [currentIndex, setCurrentIndex] = useState(1)
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
	
	/*
	useEffect(() => {
		const intervalId = setInterval(() => {
			time.current = new Date().getSeconds()
			if (time.current < 10){
				startTime.current = new Date().getSeconds()
			}
			var diff = time.current - startTime.current
			if(diff >= 10){
				setCurrent()
				startTime.current = time.current
			}
		}, 1000)
		return () => clearInterval(intervalId)
	},[]);

	*/

	const ProgressBar = () =>{
		return (
	    <div className="bg-primary h-4 mt-4 mx-auto bottom-0 rounded-md self-start animate-expand "/>
	  )	
	}

	
	const AboutMeDescriptions = () =>{
		var text = aboutMeSections[currentIndex]
		var image = aboutMeSectionImages[currentIndex]

		const SectionOne = () => {
			return(
				<div className="flex flex-col w-[90%] h-40 md:h-[70%] bg-secondary rounded-md border-2 border-gray-500 hover:border-white mx-auto ">
					<div className="">
						<p className="text-center self-center">{text}</p>
					</div>
				</div>
			)
		}

		const SectionTwo = () => {
			return(
				<div className="flex flex-col w-[90%] bg-tertiary rounded-md gap-4 self-center">
					<div className="description-2-container">
						<p className="bg-secondary border-2 border-gray-500 rounded-md hover:border-white">{text}</p>
					</div>
					<div className="flex flex-row gap-4 self-center justify-center place-content-center">
						<div className="">
							<h1 className="bg-secondary border-2 w-[8.2rem] h-[10rem] md:w-[26.5rem] md:h-[30rem] border-gray-500 hover:border-white rounded-md ">{image}</h1>
						</div>
						<div className="bg-secondary border-2 w-[8.2rem] h-[10rem] md:w-[26.5rem] md:h-[30rem] border-gray-500 hover:border-white rounded-md ">
							<h1 className="description-image-placeholder">{image}</h1>
						</div>
						<div className="bg-secondary border-2 w-[8.2rem] h-[10rem] md:w-[26.5rem] md:h-[30rem] border-gray-500 hover:border-white rounded-md ">
							<h1 className="description-image-placeholder">{image}</h1>
						</div>
					</div>
				</div>
			)
		}

		const SectionThree = () => {
			return(
				<div className="main-description-container">
					<div className="description-image-container">
						<h1 className="description-image-placeholder">{image}</h1>
					</div>
					<div className="description-container">
						<p className="description">{text}</p>
					</div>
				</div>
			)
		}

		const CurrentSection = currentIndex == 0 ? SectionOne : currentIndex == 1 ? SectionTwo : SectionThree


		return(
			<CurrentSection/>
		)
	}
	
	return(
		<section id="about">
			<div className="flex flex-col bg-tertiary w-full h-[35rem] md:w-full md:h-[30rem] mb-fill place-content-start">
				<div className=""
				style={{ opacity: scrollPosition}}>
					<h1 className="text-center text-2xl mb-10 text-white self-center">Here's a little bit about me</h1>		
				</div>
				<div className="flex flex-col place-content-center justify-center">	
				<AboutMeDescriptions/>
				<LanguagesAndTools/>
				</div>
				<ProgressBar/>
			</div>	
		</section>
	)
}

export default AboutMe;