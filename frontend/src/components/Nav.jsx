const Nav = () =>{

	return(
		<nav className="flex w-full md:h-[4rem] md:h-min-12 bg-black justify-center place-content-center ">
			<div className="self-center w-full md:w-[90rem] md:h-[4rem] flex flex-row flex-wrap ">
				<a href="#about" className="w-[33%]  p-4 mx-auto text-text hover:bg-secondary text-center bg-black  ">ABOUT</a>
				<a href="#projects" className="w-[33%]  p-4 mx-auto text-text hover:bg-secondary text-center bg-black ">PROJECTS</a>
				<a href="#quicklinks" className="w-[33%] p-4 mx-auto text-text hover:bg-secondary text-center bg-black ">LINKS</a>
			</div>
		</nav>
	)
}

export default Nav;