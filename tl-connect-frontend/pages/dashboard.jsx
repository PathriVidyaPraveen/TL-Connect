import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Cards";
import data from "../data/dashboard.json"; 
import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.content}>
          <h2>Dashboard</h2>
          {data.map((card, index) => (
            <Cards key={index} title={card.title} items={card.items} />
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
