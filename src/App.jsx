import React, { useState } from 'react';
import './index.css';
import { FaUserCircle, FaLanguage, FaBell } from 'react-icons/fa';
import SensusLogo from './assets/download.png';


const App = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };
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
          <li className={`dropdown ${activeDropdown === 'employee' ? 'active' : ''}`}>
            <div className="menu-item" onClick={() => toggleDropdown('employee')}>
              Employee
            </div>
            {activeDropdown === 'employee' && (
              <ul className="dropdown-content">
                <li><a href="/all-employees">All Employee</a></li>
                <li><a href="/appointment">Appointment</a></li>
              </ul>
            )}
          </li>
          <li className={`dropdown ${activeDropdown === 'leave' ? 'active' : ''}`}>
            <div className="menu-item" onClick={() => toggleDropdown('leave')}>
              Leave
            </div>
            {activeDropdown === 'leave' && (
              <ul className="dropdown-content">
                <li><a href="/leave/status">Status</a></li>
                <li><a href="/leave/request">Request</a></li>
                <li><a href="/leave/calendar">Calendar</a></li>
                <li><a href="/leave/summary">Summary</a></li>
              </ul>
            )}
          </li>
          <li className={`dropdown ${activeDropdown === 'attendance' ? 'active' : ''}`}>
            <div className="menu-item" onClick={() => toggleDropdown('attendance')}>
              Attendance
            </div>
            {activeDropdown === 'attendance' && (
              <ul className="dropdown-content">
                <li><a href="/attendance/daily-log">Daily Log</a></li>
                <li><a href="/attendance/request">Request</a></li>
                <li><a href="/attendance/details">Details</a></li>
              </ul>
            )}
          </li>
          <li className={`dropdown ${activeDropdown === 'administration' ? 'active' : ''}`}>
            <div className="menu-item" onClick={() => toggleDropdown('administration')}>
              Administration
            </div>
            {activeDropdown === 'administration' && (
              <ul className="dropdown-content">
                <li><a href="/admin/role">Role</a></li>
                <li><a href="/admin/shift">Shift</a></li>
                <li><a href="/admin/department">Department</a></li>
              </ul>
            )}
          </li>
          <li className={`dropdown ${activeDropdown === 'settings' ? 'active' : ''}`}>
            <div className="menu-item" onClick={() => toggleDropdown('settings')}>
              Settings
            </div>
            {activeDropdown === 'settings' && (
              <ul className="dropdown-content">
                <li><a href="/settings/general">General</a></li>
                <li><a href="/settings/leave">Leave</a></li>
                <li><a href="/settings/attendance">Attendance</a></li>
              </ul>
              )}
          </li>
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
