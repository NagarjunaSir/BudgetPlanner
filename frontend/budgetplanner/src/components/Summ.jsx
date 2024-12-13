import React, { useState } from 'react';

const Summ = () => {
  // Initial state for the budget categories over months
  const [monthsData, setMonthsData] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('');
  const [budgetValues, setBudgetValues] = useState({
    rent: '',
    power: '',
    wifi: '',
    investment: '',
    insurance: '',
    charity: '',
    entertainment: '',
    emergency: '',
    health: '',
  });

  // Handle input change for all categories
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBudgetValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle adding a new month to the table
  const handleAddMonth = () => {
    if (!currentMonth || Object.values(budgetValues).includes('')) {
      alert('Please fill all fields and select a month.');
      return;
    }

    setMonthsData((prevData) => [
      ...prevData,
      { month: currentMonth, ...budgetValues },
    ]);
    // Reset form fields
    setBudgetValues({
      rent: '',
      power: '',
      wifi: '',
      investment: '',
      insurance: '',
      charity: '',
      entertainment: '',
      emergency: '',
      health: '',
    });
    setCurrentMonth('');
  };

  // Calculate total expenses per category and total over all months
  const calculateTotal = (category) => {
    return monthsData.reduce((total, monthData) => total + parseFloat(monthData[category] || 0), 0);
  };

  return (
    <div className="component-container budget-planner">
      <h2>Budget Planner Summary</h2>
      <div>
        <label>Month: </label>
        <input
          type="month"
          value={currentMonth}
          onChange={(e) => setCurrentMonth(e.target.value)}
        />
      </div>

      {/* Form for entering monthly data */}
      <div>
        {Object.keys(budgetValues).map((category) => (
          <div key={category}>
            <label>{category.charAt(0).toUpperCase() + category.slice(1)} ($): </label>
            <input
              type="number"
              name={category}
              value={budgetValues[category]}
              onChange={handleInputChange}
              placeholder={`Enter ${category}`}
            />
          </div>
        ))}
      </div>

      <div>
        <button onClick={handleAddMonth}>Add Month</button>
      </div>

      {/* Summary Table */}
      {monthsData.length > 0 && (
        <div className="table-container">
          <h3>Summary Table</h3>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Rent</th>
                <th>Power</th>
                <th>WiFi</th>
                <th>Investment</th>
                <th>Insurance</th>
                <th>Charity</th>
                <th>Entertainment</th>
                <th>Emergency</th>
                <th>Health</th>
              </tr>
            </thead>
            <tbody>
              {monthsData.map((data, index) => (
                <tr key={index}>
                  <td>{data.month}</td>
                  <td>{data.rent}</td>
                  <td>{data.power}</td>
                  <td>{data.wifi}</td>
                  <td>{data.investment}</td>
                  <td>{data.insurance}</td>
                  <td>{data.charity}</td>
                  <td>{data.entertainment}</td>
                  <td>{data.emergency}</td>
                  <td>{data.health}</td>
                </tr>
              ))}
              {/* Total row */}
              <tr>
                <td><strong>Total (Rs.)</strong></td>
                <td><strong>{calculateTotal('rent').toFixed(2)}</strong></td>
                <td><strong>{calculateTotal('power').toFixed(2)}</strong></td>
                <td><strong>{calculateTotal('wifi').toFixed(2)}</strong></td>
                <td><strong>{calculateTotal('investment').toFixed(2)}</strong></td>
                <td><strong>{calculateTotal('insurance').toFixed(2)}</strong></td>
                <td><strong>{calculateTotal('charity').toFixed(2)}</strong></td>
                <td><strong>{calculateTotal('entertainment').toFixed(2)}</strong></td>
                <td><strong>{calculateTotal('emergency').toFixed(2)}</strong></td>
                <td><strong>{calculateTotal('health').toFixed(2)}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Summ;
