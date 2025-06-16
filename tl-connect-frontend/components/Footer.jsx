import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Tinkerers' Lab, IITH. All rights reserved.</p>

      <p>Stay connected with us on:</p>
      <ul className="social-links">
        <li>
          LinkedIn: <a href="https://www.linkedin.com/company/tinkerers-lab-iith/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </li>
        <li>
          Instagram: <a href="https://www.instagram.com/tinkererslab_iith/" target="_blank" rel="noopener noreferrer">Instagram Profile</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/TinkerersLabIITH" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </li>
      </ul>
    </footer>
  );
}
