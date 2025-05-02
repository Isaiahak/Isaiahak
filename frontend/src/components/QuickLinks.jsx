import "../styling/QuickLinks.css"
function QuickLinks(){


	

	const Links = () =>{
		return(
			 <nav className="ql-nav">
			  <a href="https://github.com/Isaiahak" className="links">Github</a>
			  <a href="https://www.linkedin.com/in/isaiah-ashton-kenny" className="links">LinkedIn</a>
			  <a href="./assets/IsaiahAshtonKennyCurrentResume.pdf" className="links" download="IsaiahAshtonKennyCurrentResume.pdf">Download Resume</a>
			</nav> 
		)
	}

	return(
		<section id="quicklinks">
			<div className="quicklinks-container">
				<h1 className="quicklink-title">My Links</h1>
				<Links/>		
			</div>
		</section>
	)
}

export default QuickLinks;