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
			<main className="content">
				{children}	
				<Outlet/>
			</main>
		</div>
	)
}

export default Layout;