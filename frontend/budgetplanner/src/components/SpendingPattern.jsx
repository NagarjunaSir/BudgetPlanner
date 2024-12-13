// App.js
import React, { useState } from 'react';
import LineGraph from './LineGraph';
import './spendingpattern.css';

const SpendingPattern = () => {
  // Sample data for monthly income, expenses, and savings
  const [data] = useState([
    { month: 'Jan', income: 3000, expenses: 2000, savings: 500 },
    { month: 'Feb', income: 3200, expenses: 2100, savings: 600 },
    { month: 'Mar', income: 3500, expenses: 2300, savings: 800 },
    { month: 'Apr', income: 4000, expenses: 2400, savings: 1200 },
    { month: 'May', income: 4200, expenses: 2500, savings: 1300 },
    { month: 'Jun', income: 4500, expenses: 2700, savings: 1500 },
    { month: 'Jul', income: 4800, expenses: 2800, savings: 1600 },
    { month: 'Aug', income: 5000, expenses: 3000, savings: 1800 },
    { month: 'Sep', income: 5200, expenses: 3100, savings: 1900 },
    { month: 'Oct', income: 5400, expenses: 3200, savings: 2000 },
    { month: 'Nov', income: 5600, expenses: 3300, savings: 2100 },
    { month: 'Dec', income: 6000, expenses: 3500, savings: 2500 },
  ]);

  return (
    <div className="App">
      <h1>Personal Budget Planner</h1>
      <h2>Income, Expenses, and Savings Over Time</h2>
      <LineGraph data={data} />
    </div>
  );
};

export default SpendingPattern;
