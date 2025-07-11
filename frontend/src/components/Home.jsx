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
		<div className='mt-4 flex flex-row gap-4 md:mt-24 justify-center place-content center'>
			<div className="md:py-4 md:px-10 py-3 px-6 bg-secondary rounded-2xl text-gray-100 hover:bg-primary ">
				<button onClick={handleEmail} className="useful-link cursor-copy ">
					<span className="">Copy Email</span>
				</button>
			</div>
		
			<div className="md:py-4 md:px-10 py-3 px-6 bg-secondary rounded-2xl text-gray-100 hover:bg-primary ">
				<a href="/IsaiahAshtonKennyCurrentResume.pdf" download>Download Resume</a>
			</div>
		
			<div className="md:py-4 md:px-10  py-3 px-6 bg-secondary rounded-2xl text-gray-100 hover:bg-primary ">
				<a href="https://www.linkedin.com/in/isaiah-ashton-kenny" >LinkedIn</a>	
			</div>
		</div>
		)
	}

	return (
		<section id="home">
			<div className="w-full h-[35rem] md:w-full md:h-[55rem] mx-auto ">
				<div className="flex flex-col justify-center place-content-center">	
					<h1 className="text-6xl self-center mt-30 mb-20">Welcome</h1>
					<h2 className="text-3xl self-center">Isaiah Ashton-Kenny</h2>
					<h3 className="text-xl self-center ">Full Stack Software Engineer </h3>
					<h3 className="text-xl self-center ">located in Toronto, Ontario</h3>
				</div>
				<UsefulLinks/>	
			</div>
		</section>
	)
}
export default Home;