import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styles from "../styles/SummerSchool.module.css";
import summerData from "../data/summerSchool.json";

export default function SummerSchool() {
  return (
    <div>
      <Navbar />
      <div className={styles.layout}>
        
        <main className={styles.content}>
          <h2>Summer School</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Topic</th>
                <th>Link</th>
                <th>Assignments</th>
              </tr>
            </thead>
            <tbody>
              {summerData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.topic}</td>
                  <td>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join
                    </a>
                  </td>
                  <td>
                    {Array.isArray(item.assignments)
                      ? item.assignments.join(", ")
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
      <Footer />
    </div>
  );
}
