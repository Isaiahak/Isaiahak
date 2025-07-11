function QuickLinks(){
	const Links = () =>{
		return(
			<nav className=" mt-4 flex flex-col w-full h-full gap-4 md:w-80rem md:h-full">
				<a href="https://github.com/Isaiahak" className="self-center text-gray-200 hover:underline hover:text-white">Github</a>
				<a href="https://www.linkedin.com/in/isaiah-ashton-kenny" className="self-center text-gray-200 hover:underline hover:text-white">LinkedIn</a>
				<a href="/IsaiahAshtonKennyCurrentResume.pdf" className="self-center text-gray-200 hover:underline hover:text-white" download>Download Resume</a>
			</nav> 

		)
	}

	return(
		<section id="quicklinks">
			<div className="mt-[6rem]">
				<div className="w-full h-full md:h-full pb-[1.5rem] bg-primary border-t-2 border-primary">
					<h1 className="text-center md:text-2xl text-gray-300">My Links</h1>
					<Links/>	
				</div>
			</div>
		</section>
	)
}

export default QuickLinks;