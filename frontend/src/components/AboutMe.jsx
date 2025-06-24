import LanguagesAndTools from "./LanguagesAndTools.jsx"
import {useState, useEffect, useRef} from "react"
import Me from '../assets/Me.jpg'
function AboutMe(){
	
	// i want to fix this page and have scrolling change the slides presented

	const [currentIndex, setCurrentIndex] = useState(2)
	const [scrollPosition, setScrollPosition] = useState(0)
	const startTime = useRef(new Date().getSeconds())
	const time = useRef(new Date().getSeconds())
	const aboutMeSections = [
		" Hello my name is Isaiah Ashton-Kenny, I am a software engineering student learning full-stack development.",
		"When I am not programming, You can find me outside running, riding my bike or climbing rocks",
		" Currently I tackling full-stack development by working on a set of online party games\n" 
		+" to be hosted online for my friends to play!\n" 
	]

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
			<div className="mx-auto self-start w-[90%] md:w-[60rem]">
	    		<div className="flex h-4 mt-4 rounded-md self-start shadow-2xl/30 shadow-gray-500 animate-progress-bar md:animate-progress-bar-md "/>	
			</div>
	  )	
	}

	
	const AboutMeDescriptions = () =>{
		var text = aboutMeSections[currentIndex]
		var image = aboutMeSectionImages[currentIndex]

		const SectionOne = () => {
			return(
				<div className="flex flex-col w-[90%] h-64 md:h-[30rem] md:w-[60rem] justify-center bg-secondary rounded-md  shadow-2xl/30 border-2 border-gray-500 hover:border-white mx-auto ">
					<div className="flex flex-row gap-2">
						<div className=" ml-4 md:ml-10">
							<img src={Me} className=" w-90 h-40 md:w-140 md:h-90 rounded-md "/>
						</div>
						<p className="text-lg md:text-2xl text-center self-center mx-2 md:mx-18">{text}</p>
					</div>
				</div>
			)
		}

		const SectionTwo = () => {
			return(
				<div className="flex flex-col w-[90%] md:w-[60rem] rounded-md gap-4 self-center">
					<div className="flex flex-col w-full h-[6rem] justify-center bg-secondary border-2 border-gray-500 rounded-md shadow-2xl/30 hover:border-white">
						<p className=" mx-2 text-xl">{text}</p>
					</div>
					<div className="flex flex-row gap-x-4 md:w-[60rem] self-center justify-center place-content-center">
						<div className="">
							<h1 className="bg-secondary border-2 w-[8.2rem] h-[9rem] md:w-[19.33rem] md:h-[22rem] shadow-2xl/30 border-gray-500 hover:border-white rounded-md ">{image}</h1>
						</div>
						<div className="bg-secondary border-2 w-[8.2rem] h-[9rem] md:w-[19.33rem] md:h-[22rem] shadow-2xl/30 border-gray-500 hover:border-white rounded-md ">
							<h1 className="description-image-placeholder">{image}</h1>
						</div>
						<div className="bg-secondary border-2 w-[8.2rem] h-[9rem] md:w-[19.33rem] md:h-[22rem] shadow-2xl/30 border-gray-500 hover:border-white rounded-md ">
							<h1 className="description-image-placeholder">{image}</h1>
						</div>
					</div>
				</div>
			)
		}
					

		const SectionThree = () => {
			return(
				<div className="flex flex-col w-[90%] md:w-[60rem] h-full gap-4 mx-auto ">
					<div className="flex flex-col w-full h-[7rem] md:h-[15rem] self-center justify-center shadow-2xl/30 bg-secondary border-2 border-gray-500 rounded-md hover:border-white">
						<p className="mx-2 text-center self-center">{text}</p>
					</div>
					<div className="flex flex-col w-full h-[7rem] md:h-[15rem] self-center bg-secondary border-2 shadow-2xl/30 border-gray-500 rounded-md hover:border-white">
						<h1 className="description-image-placeholder">{image}</h1>
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
			<div className="flex flex-col gradient-background w-full h-[35rem] md:w-full md:h-[55rem] mb-fill place-content-start">
				<div className=""
				style={{ opacity: scrollPosition}}>
					<h1 className="text-center text-2xl md:text-4xl mb-10 md:mb-[5rem] md:mt-[5rem] text-white self-center">Here's a little bit about me</h1>		
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