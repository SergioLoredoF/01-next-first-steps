import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pracing' },
    { path: '/contact', text: 'Contact' }
]

export const NavBar = async() => {

    return(
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

            <Link href="/" className="flex items-center">
                <FaHome /> 
                <span className="ml-2">Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {
                navItems.map( navItem => <ActiveLink key={navItem.path} { ...navItem } /> )
            }

        </nav>
    )
}