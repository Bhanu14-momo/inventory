// src/App.jsx
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import './App.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const inventory = [
    { name: 'Chair', stock: 20, price: 1500, demand: 80 },
    { name: 'Table', stock: 10, price: 3000, demand: 60 },
    { name: 'Sofa', stock: 5, price: 12000, demand: 90 },
    { name: 'Bed', stock: 8, price: 10000, demand: 70 }
  ];

  const demandChartData = {
    labels: inventory.map(item => item.name),
    datasets: [
      {
        label: 'Demand Score',
        data: inventory.map(item => item.demand),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4,
      }
    ]
  };

  const pricingTips = 'Based on current demand, consider increasing Sofa price by 10%, and offering a discount on Table to boost sales.';

  return (
    <div className="container">
      <h1>Inventory Dashboard</h1>

      <div className="section">
        <h2>📦 Inventory Table</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Stock</th>
              <th>Price (₹)</th>
              <th>Demand Score</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td>{item.demand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>📈 Demand Prediction</h2>
        <Line data={demandChartData} />
      </div>

      <div className="section">
        <h2>💡 Pricing Suggestion</h2>
        <p>{pricingTips}</p>
      </div>
    </div>
  );
}

export default App;
