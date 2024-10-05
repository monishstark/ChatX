import React,{ useState } from "react";
import "../styles/Login.css";
function OtpVerify() {
    const [otp, setOtp] = useState('');
    return (
        <div>
            <h3>OTP Verification</h3>
            <div className="input-wrapper">
                <input
                    type="tel"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                />
            </div>
            <button type="submit">VERIFY</button>
        </div>
    );
}
export default OtpVerify;