function QuickLinks(){
	const Links = () =>{
		return(
			<nav className=" mt-4 flex flex-col w-full h-full gap-4 md:w-80rem md:h-full bg-[#000000]">
				<a href="https://github.com/Isaiahak" className="self-center text-gray-200 hover:underline hover:text-white">Github</a>
				<a href="https://www.linkedin.com/in/isaiah-ashton-kenny" className="self-center text-gray-200 hover:underline hover:text-white">LinkedIn</a>
				<a href="/IsaiahAshtonKennyCurrentResume.pdf" className="self-center text-gray-200 hover:underline hover:text-white" download>Download Resume</a>
			</nav> 

		)
	}

	return(
		<section id="quicklinks">
			<div className="mt-10">
				<div className="w-full h-full md:h-full bg-[#000000] opacity-70 border-t-2 border-black">
					<h1 className="text-center md:text-2xl">My Links</h1>
					<Links/>	
				</div>
			</div>
		</section>
	)
}

export default QuickLinks;