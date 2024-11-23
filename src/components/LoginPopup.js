




import { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // Import jwt-decode to decode the token

const LoginPopup = () => {
  const [loginSuccess, setLoginSuccess] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [userProfile, setUserProfile] = useState(null); // State for storing user profile
  const navigate = useNavigate();

  // Check if the user is logged in
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setLoginSuccess(true); // User is logged in
      const storedProfile = localStorage.getItem("userProfile");
      if (storedProfile) {
        setUserProfile(JSON.parse(storedProfile)); // Load user profile from localStorage
      }
    } else {
      setLoginSuccess(false); // User is not logged in
    }
  }, []);

  // Redirect if user tries to access protected pages without being logged in
  useEffect(() => {
    const protectedPaths = ["/contact", "/portfolio", "/about", "/query"];
    const currentPath = window.location.pathname;

    if (protectedPaths.includes(currentPath) && !loginSuccess) {
      navigate("/"); // Redirect to home page if not logged in
    }
  }, [loginSuccess, navigate]);

  // Show the popup only if the user is not logged in
  useEffect(() => {
    if (!loginSuccess) {
      const timer = setTimeout(() => {
        setIsPopupVisible(true);
      }, 10000); // Show popup after 1 second

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [loginSuccess]);

  // Close the popup
  const handleClose = () => {
    setIsPopupVisible(false);
  };

  // Handle login success and extract user credentials and photo
  const handleLoginSuccess = (credentialResponse) => {
    console.log("Login successful:", credentialResponse);

    // Decode the JWT token to get the user profile
    const decoded = jwtDecode(credentialResponse.credential);
    console.log("Decoded JWT:", decoded);

    // Initialize pictureUrl with the decoded picture (if available)
    let pictureUrl = decoded.picture;

    // If the picture is missing from the decoded token, fetch it using the Google API
    if (!pictureUrl) {
      const fetchPicture = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${credentialResponse.credential}`
          );
          const userInfo = await response.json();

          if (userInfo.picture) {
            pictureUrl = userInfo.picture; // Use the picture from the API
          } else {
            pictureUrl = "https://via.placeholder.com/150"; // Fallback image
          }

          // Set the user profile state including the picture
          setUserProfile({
            name: decoded.name,
            email: decoded.email,
            picture: pictureUrl,
          });

          // Save profile to localStorage
          localStorage.setItem(
            "userProfile",
            JSON.stringify({
              name: decoded.name,
              email: decoded.email,
              picture: pictureUrl,
            })
          );
        } catch (error) {
          console.error("Error fetching user profile picture:", error);
          pictureUrl = "https://via.placeholder.com/150"; // Fallback image in case of error
          setUserProfile({
            name: decoded.name,
            email: decoded.email,
            picture: pictureUrl,
          });
        }
      };

      fetchPicture();
    } else {
      // If the picture is available in the decoded token, set the profile directly
      setUserProfile({
        name: decoded.name,
        email: decoded.email,
        picture: pictureUrl,
      });

      // Save profile to localStorage
      localStorage.setItem(
        "userProfile",
        JSON.stringify({
          name: decoded.name,
          email: decoded.email,
          picture: pictureUrl,
        })
      );
    }

    // Save the token and update login state
    localStorage.setItem("authToken", credentialResponse.credential);
    setLoginSuccess(true);

    navigate("/query", { replace: true });
    window.location.reload();

    alert("Successfully logged in!");
  };

  return (
    <>
      {isPopupVisible && !loginSuccess && (
        <div id="popup-container">
          <div className="overlay-login">
            <div className="popup-login">
              <h2 className="h2-login">Login</h2>
              <br />
<center>
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => {
                  console.log("Login failed");
                  setLoginSuccess(false);
                }}
                scope="profile email" // Request profile and email
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    style={{
                      backgroundColor: "#4285F4",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontSize: "16px",
                    }}
                  >
                    <span style={{ marginRight: "8px" }}>🔑</span> Sign in with Google
                  </button>
                )}
              />
              </center>

              <br />
              <div className="actions-login">
                <button type="button" onClick={handleClose} className="button-login">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { LoginPopup };
