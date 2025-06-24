import AboutMe from "./AboutMe.jsx"
import Projects from "./Projects.jsx"
import QuickLinks from "./QuickLinks.jsx"

const Home = () =>{

	const email = "isaiahkenny321123@gmail.com"
	const handleEmail = async () => {
		try{
			await navigator.clipboard.writeText(email)
		}
		catch(error){
			console.error('Failed to copy email', error)
		}
	}

	const UsefulLinks = () => {
		return(
		<div className='mt-4 flex flex-row gap-4 mt-8 justify-center place-content center'>
			<div className="pt-1 pb-1 px-4 bg-gray-200 rounded-md hover:bg-gray-500 ">
				<button onClick={handleEmail} className="useful-link">
					<span className="">Copy Email</span>
				</button>
			</div>
		
			<div className="pt-1 pb-1 px-4 bg-gray-200 rounded-md hover:bg-gray-500 ">
				<a href="/IsaiahAshtonKennyCurrentResume.pdf" download>Download Resume</a>
			</div>
		
			<div className="pt-1 pb-1 px-4 bg-gray-200 rounded-md hover:bg-gray-500 ">
				<a href="https://www.linkedin.com/in/isaiah-ashton-kenny" >LinkedIn</a>	
			</div>
		</div>
		)
	}

	return (
		<section id="home">
			<div className="w-full h-[35rem] md:w-full md:h-[50rem] mx-auto">
				<div className="flex flex-col justify-center place-content-center">	
					<h1 className="text-6xl self-center mt-20 mb-20">Welcome</h1>
					<h2 className="text-2xl self-center">Isaiah Ashton-Kenny</h2>
					<h3 className="text-xl self-center ">Full Stack Software Engineer </h3>
					<h3 className="text-xl self-center ">located in Toronto, Ontario</h3>
				</div>
				<UsefulLinks/>	
			</div>
		</section>
	)
}
export default Home;