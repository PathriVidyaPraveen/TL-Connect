import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [role, setRole] = useState('');
  const [textColor, setTextColor] = useState('#000'); // default to black
  const router = useRouter();

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTextColor(isDark ? '#fff' : '#000');
  }, []);

  const handleLogin = () => {
    if (role) {
      router.push(`/dashboard?role=${role}`);
    } else {
      alert('Please select a role');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 style={{ color: textColor }}>Login to TL-Connect</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select your role</option>
        <option value="core">Core</option>
        <option value="lead">Lead</option>
        <option value="member">Member</option>
        <option value="student">Student</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
