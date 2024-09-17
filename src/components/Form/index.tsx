import React, { useState } from "react";
import Input from "../Input";
import './form.css';
import Logo from '../../assets/img/logo.png';
import SwitchBox from "../Switch";
import googleLogo from '../../assets/img/google-logo.svg'
import eyeOn from '../../assets/img/eyeOn.svg'
import eyeOff from '../../assets/img/eyeOff.svg'

const Form : React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <>
        <div className="container">
            <img src={Logo} alt="" />
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Nice to see you again</h2>
                    <Input 
                        type="text"
                        placeholder="Email or phone number" 
                        label="Login" 
                        isPassword = {false}
                        addValue={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Enter password" 
                        label="Password" 
                        isPassword= {true}
                        eyeImg={isPasswordVisible ? eyeOff : eyeOn}
                        onClick={togglePasswordVisibility}
                        addValue={(e) => setPassword(e.target.value)}
                    />
                    <SwitchBox/>
                    <button id="submit" type="submit">Sign In</button>
                </form>
                <div className="signGoogle">
                    <button>
                        <img src={googleLogo} alt="" />
                        Or sign in with Google
                    </button>
                    <p>
                        Don't have an account?
                        <a href="#" id="signUp">
                            Sign up now
                        </a>
                    </p>
                </div>
            </div>
            
        </div>
        
        </>
    )
}

export default Form;