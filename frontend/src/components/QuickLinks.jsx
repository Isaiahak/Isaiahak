import "../styling/QuickLinks.css"
function QuickLinks(){

	const Links = () =>{
		return(
			 <nav>
			  <a href="https://github.com/Isaiahak">Github</a>
			  <a href="https://www.linkedin.com/in/isaiah-ashton-kenny">LinkedIn</a>
			</nav> 
		)
	}

	return(
		<>
			<div className="quicklinks-container">
				<h1 className="title">My Links</h1>
				<div className="link-nav">
					<Links/>
				</div>
			</div>
		</>
	)
}

export default QuickLinks;