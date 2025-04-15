import "../styling/Projects.css"
import {useState} from 'react'

function Projects(){
	const [currentProject, setCurrentProject] = useState(1);
	
	const title = {
		textAlign: "center",
		fontSize: "40px",
	}


	var projectMap = [
		["example","application_img.jpg","application discription ayayayaydaw","application.com"],
		["BidlyAuctions"],
		["Flicks"],
		["filler"],
	]



	return(
		<>
		<div className="project-container">
			<h1 style={title}>Some of my current projects</h1>
				<div className="project-image-container">
					<div className="project-container-top">
						<div className="project-image">
							<p>
								project image goes here
							</p>
						</div >
						<div className="project-description">
							<p>
								this is where the project discription goes
							</p>
						</div>
					</div>
					<div className="project-container-bottom">
						<div>
							<p>
								this is going to be where next and prev buttons go
							</p>
						</div>
					</div>
				</div>
		</div>
		</>
	)
}

export default Projects;