const Nav = () =>{

	return(
		<nav className="flex w-full h-10 md:h-[4rem] md:h-min-12 bg-[#000000] opacity-70 justify-center place-content-center ">
			<div className="self-center md:w-[90rem] md:h-[4rem] flex flex-row flex-wrap">
				<a href="#about" className="w-[33%] h-full mx-auto text-gray-200 hover:bg-primary text-center bg-[#000000] hover:opacity-70 ">ABOUT</a>
				<a href="#projects" className="w-[33%] h-full mx-auto text-gray-200 hover:bg-primary text-center bg-[#000000] hover:opacity-70">PROJECTS</a>
				<a href="#quicklinks" className="w-[33%] h-full mx-auto text-gray-200 hover:bg-primary text-center bg-[#000000] hover:opacity-70">LINKS</a>
			</div>
		</nav>
	)
}

export default Nav;