import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [role, setRole] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (role) {
      router.push(`/dashboard?role=${role}`);
    } else {
      alert('Please select a role');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login to TL-Connect</h2>
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
