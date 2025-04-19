import "../styling/Nav.css"


const Nav = () =>{

	return(
		<nav className="nav">
			<div className="buttons-container">
				<a href="#about" className="a">About</a>
				<a href="#projects" className="a">Projects</a>
				<a href="#quicklinks" className="a">Links</a>
			</div>
		</nav>
	)
}

export default Nav;