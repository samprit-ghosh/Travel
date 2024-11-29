


import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Correct named import



const Header = ( ) => {


  const [loginSuccess, setLoginSuccess] = useState(() =>
    Boolean(localStorage.getItem("authToken"))
  );
  const [userProfile, setUserProfile] = useState(() => {
    // Get user profile from localStorage if available
    const storedProfile = localStorage.getItem("userProfile");
    return storedProfile ? JSON.parse(storedProfile) : null;
  });
  const navigate = useNavigate();
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const protectedPaths = ["/contact", "/portfolio", "/about", "/query"];
    const currentPath = window.location.pathname;

    if (protectedPaths.includes(currentPath) && !localStorage.getItem("authToken")) {
      alert("Please login to move the next page !!")
      navigate("/"); // Redirect if not logged in
     
    }
  }, [navigate]);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userProfile"); // Remove profile from localStorage
    setLoginSuccess(false);
    setUserProfile(null);
    alert("Logged out successfully!");
    navigate("/"); // Redirect to home page
  };

  const handleLoginSuccess = async (credentialResponse) => {
    console.log("Login successful:", credentialResponse);

    // Decode the JWT token to get the user profile
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Decoded JWT:", decoded);

    // Default picture (fallback)
    let pictureUrl = decoded.picture || "https://via.placeholder.com/150";

    // If the decoded token doesn't have a picture, fetch it via API
    if (!decoded.picture) {
      try {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${credentialResponse.credential}`
        );
        const userInfo = await response.json();

        pictureUrl = userInfo.picture || "https://via.placeholder.com/150"; // Fallback image
      } catch (error) {
        console.error("Error fetching user profile picture:", error);
      }
    }

    // Set the user profile with fetched picture URL or fallback
    const profileData = {
      name: decoded.name,
      email: decoded.email,
      picture: pictureUrl,
    };

    // Update the user profile state
    setUserProfile(profileData);

    // Save profile to localStorage
    localStorage.setItem("userProfile", JSON.stringify(profileData));
    localStorage.setItem("authToken", credentialResponse.credential);

    // Update login state
    setLoginSuccess(true);
    navigate("/query", { replace: true });

    alert("Successfully logged in!");
  };






  return (
    <div>

   
      <header className="header">

    
        <a href="/" className="logo">SS Travels</a>
        <FontAwesomeIcon
          icon={faBars}
          className={`fas fa-bars ${isMenuActive ? "fa-times" : ""}`}
          id="menu-icon"
          onClick={toggleMenu}
        />

        <nav className={`navbar ${isMenuActive ? "active" : ""}`}>
        {/* <SearchBar className="mb-sc"></SearchBar> */}

        {/* <SearchBar onSearch={onSearch} /> */}
          <a className="a-nav" href="/">Home</a>
          <a className="a-nav" href="/query">Query</a>
          <a className="a-nav" href="/about">About</a>
          <a className="a-nav" href="/contact">Contact</a>
          <a className="a-nav" href="/adminpage">Admin</a>
        {/* <SearchBar ></SearchBar>
  */}

          {!loginSuccess ? (
         <a className="a-gl"> 
         <GoogleLogin
              clientId="337889366589-rph5vunrtkpmr6c8lr2b5p2t46k7kj1m.apps.googleusercontent.com" // Replace with your Google OAuth Client ID
              onSuccess={handleLoginSuccess}
              onFailure={(error) => console.log("Login failed", error)}
              scope="openid profile email"
            
          
              prompt="select_account"
              theme="outline"
              size="large"
       
            /></a>
          ) : (
            <>
              <div className="user-profile">
                <img
                  src={userProfile?.picture || "https://via.placeholder.com/150"} // Fallback image
                  alt={userProfile?.name || "User"}
                  className="user-avatar"
                />
                <span>{userProfile?.name}</span>
              </div>

              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </>
          )}
        </nav>
      </header>

      
    </div>
  );
};

export default Header;




