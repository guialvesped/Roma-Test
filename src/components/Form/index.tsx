import React, { useState } from "react";
import Input from "../Input";

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
                placeholder="Enter Password" 
                label="Password" 
                addValue={(e) => setPassword(e.target.value)}
            />
            <div>
                
            </div>
            <button>Sign In</button>
        </form>
        </>
    )
}

export default Form;