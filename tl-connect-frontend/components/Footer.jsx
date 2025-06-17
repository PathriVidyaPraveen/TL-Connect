import '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Tinkerers' Lab, IITH. All rights reserved.</p>
      <p>Stay connected with us:</p>
      <ul className="social-links">
        <li><Link href="https://www.linkedin.com/company/tinkerers-lab-iith/posts/?feedView=all" target="_blank">LinkedIn</Link></li>
        <li><Link href="https://www.instagram.com/tinkererslab_iith/" target="_blank">Instagram</Link></li>
        <li><Link href="https://github.com/TinkerersLabIITH" target="_blank">GitHub</Link></li>
      </ul>
    </footer>
  );
}
