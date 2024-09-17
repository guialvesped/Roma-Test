import React from "react";
import './sBox.css'

const SwitchBox : React.FC = () => {
    return(
        <div className="toggle-wrapper">
            <label className="switch">
                <input type="checkbox" className="hidden-toggle" />
                <div className="slider" aria-label="Remember your information">
                    <div className="button"></div>
                </div>
                Remember me
            </label>
            <a href="#" aria-label="Forgot your password">
                Forgot Password?
            </a>
        </div>
    )
} 
 export default SwitchBox