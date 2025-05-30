import AboutMe from "./AboutMe.jsx"
import Projects from "./Projects.jsx"
import QuickLinks from "./QuickLinks.jsx"
import "../styling/Home.css"



const Home = () =>{

	return (
		<section id="home">
			<div className="home-container">
				<div className="project-background">
					<div className="project-background-side"></div>
					<div className="project-background-center"></div>
					<div className="project-background-side"></div>	
				</div>		
				<div className="image-background">		
					<div className="images first"></div>	
					<div className="images second"></div>
				</div>	
				<h1 className="title">Welcome</h1>	
			</div>
		</section>
	)
}
export default Home;