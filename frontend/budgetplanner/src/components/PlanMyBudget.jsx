// components/BudgetPlanner.js
import React, { useState } from 'react';
import './planmybudget.css'

const PlanMyBudget = () => {
  // State variables for income, expenses, saving target
  const [income, setIncome] = useState(0);
  const [savingTarget, setSavingTarget] = useState(0);
  const [investment, setInvestment] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [emergency, setEmergency] = useState(0);
  const [entertainment, setEntertainment] = useState(0);
  const [health, setHealth] = useState(0);
  const [helppoor, setHelppoor] = useState(0);
  
  const [rent, setRent] = useState(0);
  const [power, setPower] = useState(0);
  const [wifi, setWifi] = useState(0);
  const [transport, setTransport] = useState(0);
  const [groceries, setGroceries] = useState(0);
  const [child1fee, setChild1fee] = useState(0);
  const [child2fee, setChild2fee] = useState(0);
  const [misc, setMisc] = useState(0);

  // State for form submission
  const [submitted, setSubmitted] = useState(false);

  // Handlers for input fields
  const handleIncomeChange = (e) => setIncome(e.target.value);

  const handleSavingTargetChange = (e) => setSavingTarget(e.target.value);

  const handleInvestmentChange = (e) => setInvestment(e.target.value);
  const handleInsuranceChange = (e) => setInsurance(e.target.value);
  const handleHelppoorChange = (e) => setHelppoor(e.target.value);
  const handleEntertainmentChange = (e) => setEntertainment(e.target.value);
  const handleEmergencyChange = (e) => setEmergency(e.target.value);
  const handleHealthChange = (e) => setHealth(e.target.value);
 

  const handleRentChange = (e) => setRent(e.target.value);
  const handlePowerChange = (e) => setPower(e.target.value);
  const handleWifiChange = (e) => setWifi(e.target.value);
  const handleTransportChange = (e) => setTransport(e.target.value);
  const handleGroceriesChange = (e) => setGroceries(e.target.value);
  const handleChild1feeChange = (e) => setChild1fee(e.target.value);
  const handleChild2feeChange = (e) => setChild2fee(e.target.value);
  const handleMiscChange = (e) => setMisc(e.target.value);


  const totalExpenses = parseFloat(investment) + 
                        parseFloat(savingTarget) + 
                        parseFloat(insurance) + 
                        parseFloat(helppoor) + 
                        parseFloat(entertainment) +
                        parseFloat(emergency) + 
                        parseFloat(health) + 
                        parseFloat(rent) + 
                        parseFloat(power) + 
                        parseFloat(wifi) + 
                        parseFloat(transport) + 
                        parseFloat(groceries) +
                        parseFloat(child1fee) + 
                        parseFloat(child2fee) + 
                        parseFloat(misc);


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Compare expenses with income and show alert if overspending
    if (totalExpenses > income) {
      alert('Warning: You are overspending!');
    }
  };

  // Handle editing the form
  const handleEdit = () => {
    setSubmitted(false);
  };

  return (
    <div className="component-container budget-planner">
      <h2>My Budget</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Income (Rs.): </label>
          <input
            type="number"
            value={income}
            onChange={handleIncomeChange}
            required
            placeholder="Enter your income"
          />
        </div>
        <div>
          <label>Saving Target (Rs.): </label>
          <input
            type="number"
            value={savingTarget}
            onChange={handleSavingTargetChange}
            required
            placeholder="Enter saving target"
          />
        </div>
        <div>
          <label>Investment (Rs.): </label>
          <input
            type="number"
            value={investment}
            onChange={handleInvestmentChange}
            required
            placeholder="Enter Investment Amount"
          />
        </div>
        <div>
          <label> Insurance (Rs.): </label>
          <input
            type="number"
            value={insurance}
            onChange={handleInsuranceChange}
            required
            placeholder="Enter Insurance Amount"
          />
        </div>
        <div>
          <label>Help Poor (Charity) (Rs.): </label>
          <input
            type="number"
            value={helppoor}
            onChange={handleHelppoorChange}
            required
            placeholder="Enter Help poor Amount"
          />
        </div>

        <div>
          <label> Entertainment (Rs.): </label>
          <input
            type="number"
            value={entertainment}
            onChange={handleEntertainmentChange}
            required
            placeholder="Enter Entertainment Amount"
          />
        </div>
        <div>
          <label> Emergency (Rs.): </label>
          <input
            type="number"
            value={emergency}
            onChange={handleEmergencyChange}
            required
            placeholder="Enter Emergency Amount"
          />
        </div>

        <div>
          <label> Health (Rs.): </label>
          <input
            type="number"
            value={health}
            onChange={handleHealthChange}
            required
            placeholder="Enter Health Amount"
          />
        </div>


        <div>
          <label>Rent (RS.): </label>
          <input
            type="number"
            value={rent}
            onChange={handleRentChange}
            required
            placeholder="Enter rent"
          />
        </div>

        <div>
          <label>Power Bill (Rs.): </label>
          <input
            type="number"
            value={power}
            onChange={handlePowerChange}
            required
            placeholder="Enter power bill"
          />
        </div>

        <div>
          <label>Wifi Bill (Rs.): </label>
          <input
            type="number"
            value={wifi}
            onChange={handleWifiChange}
            required
            placeholder="Enter wifi bill"
          />
        </div>

        <div>
          <label> Transport (Rs.): </label>
          <input
            type="number"
            value={transport}
            onChange={handleTransportChange}
            required
            placeholder="Enter Transport bill"
          />
        </div>

        <div>
          <label>Groceries (Rs.): </label>
          <input
            type="number"
            value={groceries}
            onChange={handleGroceriesChange}
            required
            placeholder="Enter Groceries bill"
          />
        </div>

        <div>
          <label>Child 1 Fee (Rs.): </label>
          <input
            type="number"
            value={child1fee}
            onChange={handleChild1feeChange}
            required
            placeholder="Enter Child 1 Fee"
          />
        </div>

        <div>
          <label>Child 2 Fee (Rs.): </label>
          <input
            type="number"
            value={child2fee}
            onChange={handleChild2feeChange}
            required
            placeholder="Enter Child 2 Fee"
          />
        </div>

        <div>
          <label> Misc (Rs.): </label>
          <input
            type="number"
            value={misc}
            onChange={handleMiscChange}
            required
            placeholder="Enter Misc amount"
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Display the results after form submission */}
      {submitted && (
        <div className="result">
          <h3>Summary</h3>
          <p>Total Income: Rs.{income}</p>
          <p>Total Expenses: Rs.{totalExpenses}</p>
          <p>Saving Target: Rs.{savingTarget}</p>

          {totalExpenses > income && (
            <p style={{ color: 'red' }}>Overspending! You are spending more than your income.</p>
          )}

          {totalExpenses <= income && (
            <p style={{ color: 'green' }}>
              You are within budget. You can save Rs.{income - totalExpenses - savingTarget} after saving target.
            </p>
          )}

          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PlanMyBudget;
