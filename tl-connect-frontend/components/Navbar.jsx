import Link from 'next/link';
import '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">TL-Connect</h1>
      <ul className="nav-links">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/workshops">Workshops</Link></li>
        <li><Link href="/summer-school">Summer School</Link></li>
        <li><Link href="/tasks">Tasks</Link></li>
        <li><Link href="/members">Members</Link></li>
        <li><Link href="/announcements">Announcements</Link></li>
        <li><Link href="/">Return to Home</Link></li>
      </ul>
    </nav>
  );
}
