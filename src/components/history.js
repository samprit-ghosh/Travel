import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

const History = () => {
  const [cookies, setCookie] = useCookies(["browsingHistory"]);
  const location = useLocation();

  useEffect(() => {
    const newEntry = {
      pathname: location.pathname,
      timestamp: new Date().toISOString(),
    };

    const updatedHistory = cookies.browsingHistory
      ? [...cookies.browsingHistory, newEntry]
      : [newEntry];

    setCookie("browsingHistory", updatedHistory, { path: "/", maxAge: 86400 });
  }, [location, cookies.browsingHistory, setCookie]);

  return (
    <div>
      <h1>User Browsing Data</h1>
      <ul>
        {cookies.browsingHistory &&
          cookies.browsingHistory.map((entry, index) => (
            <li key={index}>
              {entry.pathname} at {new Date(entry.timestamp).toLocaleString()}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default History;
