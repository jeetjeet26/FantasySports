// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [vcBalance, setVcBalance] = useState(0);

  // Static placeholder data for demonstration purposes
  const userStats = {
    wins: 5,
    losses: 2,
  };

  useEffect(() => {
    // Replace '/api/vc/balance' with your actual API endpoint
    // Ensure you have the correct logic to obtain the userId or use authentication context
    axios.get('/api/vc/balance', { params: { userId: 'user_id_here' } })
      .then(response => {
        // Assuming the API returns an object with a vcBalance property
        setVcBalance(response.data.vcBalance);
      })
      .catch(error => {
        console.error("There was an error fetching the VC balance: ", error);
      });
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>User Statistics</h2>
        <p>Wins: {userStats.wins}</p>
        <p>Losses: {userStats.losses}</p>
        <p>VC Balance: {vcBalance}</p> {/* Dynamic VC balance from API */}
        {/* Add more user stats and elements as needed */}
      </div>
      {/* Add additional sections or components for the dashboard as needed */}
    </div>
  );
};

export default Dashboard;
