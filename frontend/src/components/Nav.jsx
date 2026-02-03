const Nav = () => {

	return (
		<nav className="fixed flex w-full md:h-[4rem] md:h-min-12 border-b-primary border-b  backdrop-blur-md justify-center place-content-center z-100 ">
			<div className=" absolute self-center w-full h-full backdrop-blur-md opacity-30 z-10" />
			<div className="self-center w-full md:w-[90rem] md:h-[4rem] flex flex-row z-20">
				<a href="#about" className="p-4 mx-auto text-black text-center">ABOUT</a>
				<a href="#projects" className="p-4 mx-auto text-black text-center">PROJECTS</a>
				<a href="#quicklinks" className="p-4 mx-auto text-black text-center">LINKS</a>
			</div>
		</nav>
	)
}

export default Nav;
