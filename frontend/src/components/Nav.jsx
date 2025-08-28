const Nav = () =>{

	return(
		<nav className="fixed flex w-full md:h-[4rem] md:h-min-12 border-b-primary border-b justify-center place-content-center z-100 ">
			<div className=" absolute self-center w-full h-full backdrop-blur-lg opacity-30 bg-black z-10"/>
			<div className="self-center w-full md:w-[90rem] md:h-[4rem] flex flex-row flex-wrap z-11">
				<a href="#about" className="w-[33%]  p-4 mx-auto text-black hover:bg-secondary bg-primary text-center   ">ABOUT</a>
				<a href="#projects" className="w-[33%]  p-4 mx-auto text-black hover:bg-secondary bg-primary text-center  ">PROJECTS</a>
				<a href="#quicklinks" className="w-[33%] p-4 mx-auto text-black hover:bg-secondary bg-primary text-center ">LINKS</a>
			</div>
		</nav>
	)
}

export default Nav;