const Nav = () =>{

	return(
		<nav className="w-full h-10 md:h-12 md:h-min-12">
			<div className="w-full h-full flex flex-row">
				<a href="#about" className="w-[33%] h-full mx-auto text-gray-200 bg-tertiary text-center hover:bg-[#4c2282] ">ABOUT</a>
				<a href="#projects" className="w-[33%] h-full mx-auto text-gray-200 bg-tertiary text-center hover:bg-[#4c2282]">PROJECTS</a>
				<a href="#quicklinks" className="w-[33%] h-full mx-auto text-gray-200 bg-tertiary text-center hover:bg-[#4c2282]">LINKS</a>
			</div>
		</nav>
	)
}

export default Nav;