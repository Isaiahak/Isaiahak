import {useState} from "react"
import Me from '../assets/Me.jpg'
import Climbing1 from '../assets/climbing1.mp4'
import Climbing2 from '../assets/climbing2.mp4'
import Camping from '../assets/camping_1.jpg'
import Running from '../assets/running.jpg'
import BikeView from '../assets/bike_view.jpg'
import BikeView2 from '../assets/bike_view_2.jpg'

function AboutMe(){
	
	// i want to fix this page and have scrolling change the slides presented

	const [currentIndex, setCurrentIndex] = useState(0)
	const [currentVideo, setCurrentVideo] = useState(0)

	const aboutMeSections = [
		" Hello my name is Isaiah Ashton-Kenny, I am a software engineering student learning full-stack development.",
		"When I am not programming, You can find me outside running, riding my bike or climbing rocks",
		" Currently I tackling full-stack development by working on online workflow alternative to jira and confluence\n" 
	]

	const aboutMeSectionImages = [[Me],[Running,BikeView,Climbing1,Climbing2,BikeView,Camping],[]]

	const setCurrent = () =>{
		const index  =  currentIndex === aboutMeSections.length -1 ? 0 : currentIndex + 1
		setCurrentIndex(index)
		preloadImages(index+1)
	}

	const handleVideoEnd = () =>{
		setCurrent()
		setCurrentVideo(prevVideo => prevVideo === 1 ? 0 : prevVideo + 1)
	}

	const preloadImages = (index) =>{
		if (!aboutMeSectionImages[index]) return

		const images = aboutMeSectionImages[index]
		images.forEach((src) => {
			if(src.endsWith('.mp4')){
				const vid = document.createElement("video")
				vid.src = src
				vid.preload = 'auto'
				vid.load()
			}else{
				const img = new Image()
				img.src = src
			}
		}) 
	}

	const ProgressBar = () =>{
		return (
			<div className="mx-auto self-start w-[90%] md:w-[60rem]">
	    		<div onAnimationEnd={setCurrent} className="flex h-4 mt-4 rounded-md self-start shadow-2xl/30 shadow-gray-500 animate-progress-bar md:animate-progress-bar-md "/>	
			</div>
	  )	
	}

	const AboutMeDescriptions = () =>{
		var text = aboutMeSections[currentIndex]
		var image = aboutMeSectionImages[currentIndex]

		const SectionOne = () => {
			return(
				<div className="flex flex-col w-[90%] h-64 md:h-[30rem] md:w-[60rem] justify-center bg-primary rounded-md  shadow-2xl/30 border-2 border-border hover:border-white mx-auto ">
					<div className="flex flex-row gap-2">
						<div className=" ml-4 md:ml-10">
							<img src={image[0]} className=" w-90 h-40 md:w-[40rem] md:h-90 rounded-md "/>
						</div>
						<p className="text-lg md:text-2xl text-center text-text self-center mx-2 md:mx-18">{text}</p>
					</div>
				</div>
			)
		}

		const SectionTwo = () => {
			return(
				<div className="flex flex-col w-[90%] md:w-[60rem] rounded-md gap-4 self-center">
					<div className="flex flex-col w-full h-[6rem] justify-center bg-primary border-2 border-border rounded-md shadow-2xl/30 hover:border-white">
						<p className=" mx-2 text-xl text-text">{text}</p>
					</div>
					<div className="flex flex-row gap-x-4 md:w-[60rem] self-center justify-center">
						<div className="bg-primary border-2 w-[8.2rem] h-[9rem] place-self-center overflow-hidden md:w-[19.33rem] md:h-[22rem] shadow-2xl/30 border-border hover:border-white rounded-md ">
							<img className="" src={currentVideo === 0 ? image[0] : image[1]}/>
						</div>
						<div className="bg-primary border-2 w-[8.2rem] h-[9rem] overflow-hidden md:w-[22.33rem] md:h-[24rem] shadow-2xl/30 border-border hover:border-white rounded-md ">
							<video key={Climbing1} muted onEnded={handleVideoEnd} autoPlay className={`w-full h-full object-fill ${currentVideo === 0 ? 'block' : 'hidden'}`} source src={Climbing1} type="video/mp4"/>
							<video key={Climbing2} muted onEnded={handleVideoEnd} autoPlay className={`w-full h-full object-fill ${currentVideo === 0 ? 'hidden' : 'block'}`} source src={Climbing2} type="video/mp4"/>
						</div>
						<div className="bg-primary border-2 w-[8.2rem] h-[9rem] overflow-hidden place-self-center md:w-[19.33rem] md:h-[22rem] shadow-2xl/30 border-border hover:border-white rounded-md ">
							<img src={currentVideo === 0 ? image[4] : image[5]}/>
						</div>
					</div>
				</div>
			)
		}
					

		const SectionThree = () => {
			return(
				<div className="flex flex-col w-[90%] md:w-[60rem] h-full gap-4 mx-auto ">
					<div className="flex flex-col w-full h-[7rem] md:h-[15rem] self-center justify-center shadow-2xl/30 bg-primary border-2 border-border rounded-md hover:border-white">
						<p className="mx-2 text-center text-text self-center">{text}</p>
					</div>
					<div className="flex flex-col w-full h-[7rem] md:h-[15rem] self-center bg-primary border-2 shadow-2xl/30 border-border rounded-md hover:border-white">
						<h1 className="">{image}</h1>
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
			<div className="flex flex-col w-full h-[20rem] md:w-full md:h-[55rem] mb-fill place-content-start">
				<h1 className="text-center text-2xl md:text-4xl mb-10 md:mb-[5rem] md:mt-[5rem] text-text self-center">Here's a little bit about me</h1>		
				<div className="flex flex-col place-content-center justify-center">	
				<AboutMeDescriptions/>
			
				</div>
				{currentIndex === 1 ? null : <ProgressBar/>}
			</div>	
		</section>
	)
}

export default AboutMe;