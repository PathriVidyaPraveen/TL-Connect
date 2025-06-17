import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Members.module.css";
import members from "../data/members.json";

export default function Members() {
  // Group members by domain
  const groupedMembers = members.reduce((acc, member) => {
    if (!acc[member.domain]) {
      acc[member.domain] = [];
    }
    acc[member.domain].push(member);
    return acc;
  }, {});

  return (
    <div>
      <Navbar />
      <div className={styles.layout}>
        
        <main className={styles.content}>
          <h2>Members</h2>
          {Object.entries(groupedMembers).map(([domain, domainMembers]) => (
            <div key={domain} className={styles.domainGroup}>
              <h3>{domain}</h3>
              <ul>
                {domainMembers.map((member, index) => (
                  <li key={index} className={styles.card}>
                    <strong>{member.name}</strong> - {member.role}
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
