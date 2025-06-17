import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Announcements.module.css";
import announcements from "../data/announcements.json";

export default function Announcements() {
  return (
    <div>
      <Navbar />
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.content}>
          <h2>Announcements</h2>
          <ul>
            {announcements.map((item, index) => (
              <li
                key={index}
                className={`${styles.announcement} ${styles[item.tag?.toLowerCase()]}`}
              >
                [{item.tag}] {item.title} - {item.date}
              </li>
            ))}
          </ul>
        </main>
      </div>
      <Footer />
    </div>
  );
}
