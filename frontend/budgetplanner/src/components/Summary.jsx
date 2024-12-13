// App.js
import React from 'react';
import BudgetPlanner from './Summ';
import './summary.css';

const Summary = () => {
  return (
    <div className="App">
      <h1>Personal Budget Planner</h1>
      <BudgetPlanner />
    </div>
  );
};

export default Summary;
