import React from 'react';
import './index.css';
import { FaUserCircle, FaLanguage, FaBell } from 'react-icons/fa';
import SensusLogo from './assets/download.png';

const App = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
      <div className="logo-container">
      
      <a href="https://sensushub.com/" target="_blank" rel="noopener noreferrer">
    <img src={SensusLogo} alt="Sensus Logo" className="logo" />
    <h2>Sensus</h2>
      </a>
        
        </div>
        
        <ul>
          <li>Dashboard</li>
          <li>Job Desk</li>
          <li>Employee</li>
          <li>Leave</li>
          <li>Attendance</li>
          <li>Administration</li>
          <li>Setting</li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <div class="header-right">
          <div className="header-icons">
            <FaLanguage className="icon" title="Language" />
            <FaBell className="icon" title="Notifications" />
            <FaUserCircle className="icon" title="Profile" />
          </div>
          <div className="actions">
            <button className="btn">+ Buddy Punching</button>
            <button className="btn">Manager POV</button>
          </div>
          </div>
        </header>
        <section className="stats">
          <div className="stat-card">Total leave allowance: <b>34</b></div>
          <div className="stat-card">Total leave taken: <b>20</b></div>
          <div className="stat-card">Total leave available: <b>87</b></div>
          <div className="stat-card">Leave request pending: <b>122</b></div>
        </section>
        <section className="time-log">
          <h2>Time Log</h2>
          <div className="log-today">
            <div>08:00 - 12:00: Worked</div>
            <div>05:00: Shortage</div>
          </div>
        </section>
        <section className="announcements">
          <h2>Announcements</h2>
          <ul>
            <li>Software Tester</li>
            <li>Software Developer</li>
            <li>UNIX Designer</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default App;
