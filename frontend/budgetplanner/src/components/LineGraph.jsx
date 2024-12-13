// components/LineGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = ({ data }) => {
  // Define the chart data for the line graph
  const chartData = {
    labels: data.map(item => item.month), // Labels for the x-axis (time)
    datasets: [
      {
        label: 'Income (Rs.)',
        data: data.map(item => item.income), // Income values for each month
        borderColor: 'rgb(12, 19, 52)', // Line color for Income
        backgroundColor: 'rgba(5, 39, 17, 0.74)', // Area color for Income
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: 'Expenses (Rs.)',
        data: data.map(item => item.expenses), // Expenses values for each month
        borderColor: 'rgba(255, 99, 132, 1)', // Line color for Expenses
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Area color for Expenses
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: 'Savings (Rs.)',
        data: data.map(item => item.savings), // Savings values for each month
        borderColor: 'rgba(54, 162, 235, 1)', // Line color for Savings
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Area color for Savings
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Income, Expenses, and Savings Over Time',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount (Rs.)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="line-graph-container">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineGraph;
