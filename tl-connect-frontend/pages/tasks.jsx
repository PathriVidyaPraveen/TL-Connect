import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Tasks.module.css";
import tasks from "../data/tasks.json";

export default function Tasks() {
  // Group tasks by domain first
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.domain]) {
      acc[task.domain] = [];
    }
    acc[task.domain].push(task);
    return acc;
  }, {});

  return (
    <div>
      <Navbar />
      <div className={styles.layout}>
        <Sidebar />
        <main className={styles.content}>
          <h2>Tasks</h2>
          {Object.entries(groupedTasks).map(([domain, domainTasks]) => (
            <div key={domain} className={styles.domainSection}>
              <h3>{domain}</h3>
              <ul>
                {domainTasks.map((task) => (
                  <li key={task.id} className={styles.card}>
                    <strong>{task.title}</strong> - {task.status} ({task.date})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </div>
  );
}
