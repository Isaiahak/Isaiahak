import AboutMe from "./AboutMe.jsx"
import Projects from "./Projects.jsx"
import QuickLinks from "./QuickLinks.jsx"
import "../styling/Home.css"

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
		<div className='link-container'>
			<div className="useful-link-buttons">
				<button onClick={handleEmail} className="useful-link">
					<span className="useful-link-text">Copy Email</span>
				</button>
			</div>
		
			<div className="useful-link-buttons">
				<a href="/IsaiahAshtonKennyCurrentResume.pdf" download>Download Resume</a>
			</div>
		
			<div className="useful-link-buttons">
				<a href="https://www.linkedin.com/in/isaiah-ashton-kenny" >LinkedIn</a>	
			</div>
		</div>
		)
	}

	return (
		<section id="home">
			<div className="home-container">
				<div className="home-info">	
					<h1 className="title">Welcome</h1>
					<h2 className="">Isaiah Ashton-Kenny</h2>
					<h3 className="">Full Stack Software Engineer located in Toronto, Ontario</h3>
				</div>
				<UsefulLinks/>	
			</div>
		</section>
	)
}
export default Home;