import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, database } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";
import { ref, onValue, remove } from "firebase/database";
import History from "./history";

function Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      const dataRef = ref(database, "credit"); // Path to your Firebase node
      onValue(dataRef, (snapshot) => {
        if (snapshot.exists()) {
          // Include key along with data for deletion reference
          const fetchedData = Object.entries(snapshot.val()).map(([key, value]) => ({
            key, // Unique identifier
            ...value,
          }));
          setData(fetchedData);
        } else {
          setData([]); // Handle case where no data exists
        }
        setLoading(false);
      });
    };

    fetchData();
  }, []);

  // Handle logout functionality
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/adminlogin"); // Redirect to admin login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Handle delete functionality
  const handleDelete = async (key) => {
    try {
      const dataRef = ref(database, `credit/${key}`); // Reference to specific data entry
      await remove(dataRef); // Remove the entry from Firebase
      alert("Data deleted successfully!");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="admin-container">
      <h1 className="admin-header">SS Travel's Dashboard</h1>
      <p className="admin-subheader">Welcome to the admin panel!</p>

      <div className="data-container">
        <h2>Submitted Quires</h2>
        {loading ? (
          <p className="loading-text">Loading data...</p>
        ) : data.length > 0 ? (
<ul className="data-list">
  {data.map((item) => (
    <li key={item.key} className="data-item">
      <strong className="strong-admin">Name:</strong> {item.name || "N/A"} <br />
      <strong className="strong-admin">Destination:</strong> {item.destination || "N/A"} <br />
      <strong className="strong-admin">Phone:</strong> {item.phoneno || "N/A"} <br />
      <strong className="strong-admin">Group Size:</strong> {item.groupSize || "N/A"} <br />
      <strong className="strong-admin">IP Address:</strong> {item.ipAddress || "N/A"} <br />
      
      {/* Render <History /> only if IP Address is valid */}
      {item.ipAddress && item.ipAddress !== "N/A" && <History />}
      
      <button
        onClick={() => handleDelete(item.key)}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  ))}
</ul>
        ) : (
          <p className="no-data-text">No data available.</p>
        )}
      </div>
<br></br>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}

export default Admin;






