import  {Outlet,Link} from "react-router-dom"

const  Layout = () =>{
	return (
		<>	
			<header>
				<nav> </nav>
			</header>
			<main>
				<Outlet/>
			</main>
			<footer> shit</footer>
		</>
	)
}
export default Layout;