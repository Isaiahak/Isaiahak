import AboutMe from "./AboutMe.jsx"
import Projects from "./Projects.jsx"
import QuickLinks from "./QuickLinks.jsx"
import "../styling/Home.css"



const Home = () =>{

	return (
		<div className="home-container">
			<div className="project-background">
				<div className="project-background-side"></div>
				<div className="project-background-center"></div>
				<div className="project-background-side"></div>	
			</div>		
			<h1 className="title">Welcome</h1>	
			<div className="images-container">
				<div className="images"></div>		
			</div>
		</div>
	)
}
export default Home;