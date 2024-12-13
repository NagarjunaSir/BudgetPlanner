// Dashboard.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PlanMyBudget from './PlanMyBudget';
import SpendingPattern from './SpendingPattern';
import Summary from './Summary';
//import Home from './Home'
import './dashboard.css'; // Importing CSS for styling
//import { Dashboard } from '@mui/icons-material';

const Dashboard = () => {
  return (
    <Router>
      <div className="dashboard-container">
        <h1 className="dashboard-title">Budget Planner</h1>

        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/plan-my-budget">Plan My Budget</Link></li>
            <li><Link to="/spending-pattern">Spending Pattern</Link></li>
            <li><Link to="/summary">Summary</Link></li>
          </ul>
        </nav>

        <div className="dashboard-layout">
          {/* Define Routes */}
          <Routes>
            <Route path="/plan-my-budget" element={<PlanMyBudget />} />
            <Route path="/spending-pattern" element={<SpendingPattern />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/" element={<h3>Welcome to the Budget Planner Dashboard!</h3>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
