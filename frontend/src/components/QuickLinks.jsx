import "../styling/QuickLinks.css"
function QuickLinks(){

	const Links = () =>{
		return(
			 <nav className="nav">
			  <a href="https://github.com/Isaiahak" className="a">Github</a>
			  <a href="https://www.linkedin.com/in/isaiah-ashton-kenny" className="a">LinkedIn</a>
			</nav> 
		)
	}

	return(
		<section id="quicklinks">
			<div className="quicklinks-container">
				<h1 className="title">My Links</h1>
				<div className="link-nav">
					<Links/>
				</div>
			</div>
		</section>
	)
}

export default QuickLinks;