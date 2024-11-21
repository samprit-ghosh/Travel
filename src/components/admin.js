import React from 'react';
import { useNavigate } from 'react-router-dom';

function DisplayPage() {
  const navigate = useNavigate();

  // Retrieve data from sessionStorage
  const formData = JSON.parse(sessionStorage.getItem('formData'));

  // Debugging: Log retrieved data
  console.log('Retrieved Data:', formData);

  // Handle the case where formData is missing (e.g., page refresh)
  if (!formData) {
    return (
      <div>
        <h1>No Data Available</h1>
        <p>Please go back and fill the form.</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Submitted Data</h1>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
    </div>
  );
}

export default DisplayPage;
