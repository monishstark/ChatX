import React,{ useState } from "react";
import { Link } from "react-router-dom"
import "../styles/Login.css";
const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div>
      <h3>Phone Number</h3>
      <div className="input-wrapper">
        <input
          type="tel"
        
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

      </div>

      <div className="checkbox-label">
        <input type="checkbox" id="keepSignedIn" />
        <span>Keep me signed in</span>
      </div>

        <Link to="/otp">
            <button type="submit">NEXT</button>
        </Link>
      
    </div>
  );
};
export default Login;