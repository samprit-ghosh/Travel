import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTrackHistory = (onPageChange) => {
  const location = useLocation();

  useEffect(() => {
    // Call the callback when the route changes
    onPageChange(location.pathname);
  }, [location.pathname, onPageChange]);
};

export default useTrackHistory;
