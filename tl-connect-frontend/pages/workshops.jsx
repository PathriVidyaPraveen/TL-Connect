import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Workshops.module.css";
import workshops from "../data/workshops.json";

export default function Workshops() {
  return (
    <div>
      <Navbar />
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.content}>
          <h2>Workshops</h2>
          <ul>
            {workshops.map((workshop, index) => (
              <li key={index}>
                <strong>{workshop.title}</strong> - {workshop.domain} ({workshop.date})
                <button>{workshop.past ? "View Details" : "Register"}</button>
              </li>
            ))}
          </ul>
        </main>
      </div>
      <Footer />
    </div>
  );
}
