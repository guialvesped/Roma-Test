import React, { useState } from "react";
import Input from "../Input";
import './form.css'
import Logo from '../../assets/img/logo.png'
import SwitchBox from "../Switch";

const Form : React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
      };
    return (
        <>
        <div className="container">
            <img src={Logo} alt="" />
            <form onSubmit={handleSubmit}>
                <h2>Nice to see you again</h2>
                <Input 
                    type="text"
                    placeholder="Email or phone number" 
                    label="Login" 
                    addValue={(e) => setEmail(e.target.value)}
                />
                <Input 
                    type="password"
                    placeholder="Enter password" 
                    label="Password" 
                    addValue={(e) => setPassword(e.target.value)}
                />
                <SwitchBox/>
                <button type="submit">Sign In</button>
            </form>
            <div className="signGoogle">

            </div>
        </div>
        
        </>
    )
}

export default Form;