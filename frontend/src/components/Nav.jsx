import "../styling/Nav.css"


const Nav = () =>{

	return(
		<nav className="nav-container">
			<div className="buttons-container">
				<a href="#about" className="nav-button">About</a>
				<a href="#projects" className="nav-button">Projects</a>
				<a href="#quicklinks" className="nav-button">Links</a>
			</div>
		</nav>
	)
}

export default Nav;