import "../styling/Nav.css"

const Nav = () =>{

	const Project = () =>{		
		function project(){
			
		}
		return(
			<a onClick={project} className="a">Projects</a>
		)
	}

	const AboutMe = () =>{		
		function aboutme(){
			
		}
		return(
			<a onClick={aboutme} className="a">About</a>
		)
	}

	const Links = () =>{
		function links(){

		}
		return(
			<a onClick={links} className="a">Links</a> 
		)
	}

	return(
		<nav>
			<div className="buttons-container">
				<Project/>
				<AboutMe/>
				<Links/>
			</div>
		</nav>
	)
}

export default Nav;