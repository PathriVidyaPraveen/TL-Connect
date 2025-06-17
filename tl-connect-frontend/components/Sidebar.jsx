import React from 'react';
import styles from '../styles/Sidebar.module.css';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/workshops">Workshops</Link></li>
        <li><Link href="/summer-school">Summer School</Link></li>
        <li><Link href="/tasks">Tasks</Link></li>
        <li><Link href="/members">Members</Link></li>
        <li><Link href="/announcements">Announcements</Link></li>
      </ul>
    </div>
  );
}
