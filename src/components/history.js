import { useEffect, useState } from "react";

function History() {
  const [ipAddress, setIpAddress] = useState('');
  const [geoInfo, setGeoInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVisitorIp();
  }, []);

  // Get the visitor's IP address
  const getVisitorIp = async () => {
    try {
      const response = await fetch('https://api.ipify.org');
      const data = await response.text();
      setIpAddress(data);
    } catch (error) {
      console.error('Failed to fetch IP:', error);
      setError('Failed to fetch your IP address');
    }
  };

  const handleInputChange = (e) => {
    setIpAddress(e.target.value);
  };

  const fetchInfo = async () => {
    if (!ipAddress) {
      setError('Please enter a valid IP address');
      return;
    }

    setLoading(true);
    setError(null); // Clear any previous error messages

    try {
      const response = await fetch(`https://ip-api.com/json/${ipAddress}`);
      if (!response.ok) {
        throw new Error('Failed to fetch location info');
      }
      const data = await response.json();
      setGeoInfo(data);
    } catch (error) {
      console.error('Failed to get location info:', error);
      setError('Failed to get location info');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
  
      <h5>IP to Location</h5>
      <div>
        <input
          type="text"
          value={ipAddress}
          onChange={handleInputChange}
          placeholder="Enter IP address"
          style={{padding:"5px", borderRadius:"10px", border:"1px solid red", color:"red"}}
        />
      
       
  
        <button className="find-button" 
        
        onClick={fetchInfo} disabled={loading}>
          {loading ? 'Fetching...' : 'Get Info'}
        </button>

        {error && <div style={{ color: 'red' }}>{error}</div>}

        {geoInfo && geoInfo.status === "fail" && (
          <div style={{ color: 'red' }}>Failed to retrieve information for the IP address.</div>
        )}

        {geoInfo && geoInfo.status !== "fail" && geoInfo.country && (
          <div>
            <h4>Location Information:</h4>
            <p><strong>IP Address:</strong> {geoInfo.query}</p>
            <p><strong>Country:</strong> {geoInfo.country}</p>
            <p><strong>Region:</strong> {geoInfo.regionName}</p>
            <p><strong>City:</strong> {geoInfo.city}</p>
            <p><strong>Latitude:</strong> {geoInfo.lat}</p>
            <p><strong>Longitude:</strong> {geoInfo.lon}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default History;
