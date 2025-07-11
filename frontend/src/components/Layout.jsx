import  {Outlet,Link} from "react-router-dom"
import Home from "./Home.jsx"
import Nav from "./Nav.jsx"
import AboutMe from "./AboutMe.jsx"
import Projects from "./Projects.jsx"
import QuickLinks from "./QuickLinks.jsx"

const  Layout = ({children}) =>{
	return (
		<div>	
			<header>
				<Nav/>
			</header>
			<main>
				<div className="fixed mx-auto w-screen h-screen blur-[70px] z-[-2]">
					<div className='relative  md:w-[90rem] h-[55rem] mx-auto'>
						<div className="absolute  right-[-10rem] top-[2rem] md:right-[-40rem] md:top-[10rem] md:p-[40rem] p-[10rem] rounded-full blur-[70px] opacity-50 grayscale-75 bg-purple-300 z-[-1]"></div>
						<div className="absolute left-[-10rem] top-[-4rem]   md:left-[-60rem] md:top-[-40rem] md:p-[50rem] p-[10rem] rounded-full  blur-[70px] opacity-50 bg-purple-950 z-[-1]"></div>
					</div>
				</div>
				{children}	
				<Outlet/>
			</main>
		</div>
	)
}

export default Layout;