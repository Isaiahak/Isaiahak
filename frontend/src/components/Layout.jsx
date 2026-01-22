import { Outlet, Link } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import AboutMe from './AboutMe'
import Projects from './Projects'
import QuickLinks from './QuickLinks'
import Background from './Background'


const Layout = ({ children }) => {

	return (
		<div>
			<main>
				<Background />
				{children}
				<Outlet />
			</main>
		</div>
	)
}

export default Layout;
