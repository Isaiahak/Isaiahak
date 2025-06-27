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
				<div className=" fixed left-0 top-0 blur-[70px] z-[-2]">
					<div className="fixed right-[-60%] top-[10%] p-[40rem] rounded-full blur-[70px] opacity-50 grayscale-75 bg-purple-800 z-[-1]"></div>
					<div className="fixed left-[-0%] top-[-60%] p-[50rem] rounded-full  blur-[70px] opacity-50 bg-purple-950 z-[-1]"></div>
				</div>
				{children}	
				<Outlet/>
			</main>
		</div>
	)
}

export default Layout;