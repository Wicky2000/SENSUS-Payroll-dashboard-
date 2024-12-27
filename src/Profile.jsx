import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Profile.css';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userType, setUserType] = useState('user');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { userType, ...formData });
    
  };

  return (
    <>
      <FaUserCircle 
        className="icon" 
        title="Profile" 
        onClick={() => setIsModalOpen(true)}
      />

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-button" 
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            
            <h2>Login</h2>
            
            <div className="user-type-toggle">
              <button
                type="button"
                className={`toggle-btn ${userType === 'user' ? 'active' : ''}`}
                onClick={() => setUserType('user')}
              >
                User
              </button>
              <button
                type="button"
                className={`toggle-btn ${userType === 'admin' ? 'active' : ''}`}
                onClick={() => setUserType('admin')}
              >
                Admin
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button type="submit" className="login-btn">
                Login as {userType === 'admin' ? 'Admin' : 'User'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;