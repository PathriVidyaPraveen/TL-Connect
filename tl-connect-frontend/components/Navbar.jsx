import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className='navbar'>
            <h1 className="logo">TL-Connect</h1>
            <ul className='nav-links'>
                <li><Link href='/dashboard'>Dashboard</Link></li>
                <li><Link href='/workshops'>Workshops</Link></li>
                <li><Link href='/tasks'>Tasks</Link></li>
            </ul>
        </nav>
    );
}