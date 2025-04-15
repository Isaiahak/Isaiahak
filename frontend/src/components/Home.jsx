import AboutMe from "./AboutMe.jsx"
import Projects from "./Projects.jsx"
import QuickLinks from "./QuickLinks.jsx"
import "../styling/Home.css"



const Home = () =>{
	const title = {
		textAlign: "center",
		fontSize: "100px",
	}
	return (
		<>	
			<div className="flex-container">
				<div className="welcome-container">			
					<h1 style={title}>Welcome</h1>				
				</div>
				<AboutMe/>
				<Projects/>
				<QuickLinks/>
			</div>
		</>
	)
}
export default Home;