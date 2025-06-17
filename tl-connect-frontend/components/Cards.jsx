import styles from '../styles/Card.module.css';

export default function Cards({ title, items }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.title || item.link || item.message}</li>
        ))}
      </ul>
    </div>
  );
}