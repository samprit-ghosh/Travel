import React from 'react';
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin component

const GoogleLoginButton = ({ onLoginSuccess, onLoginError }) => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
        console.log("Login done");
        alert("Successfully logged in !!");
        if (onLoginSuccess) onLoginSuccess(credentialResponse);
      }}
      onError={() => {
        console.log("Login failed");
        if (onLoginError) onLoginError();
      }}
    />
  );
};

export default GoogleLoginButton;
