import React from "react";
import './input.css'

interface InputProps {
    type : string,
    placeholder : string,
    label : string,
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void,
    isPassword : boolean,
    onClick ?: () => void,
    value : string,
    name : string,
    eyeImg ?: string;
}

const Input : React.FC<InputProps> = (props : InputProps) => {
    return(
        <>
        <a>{props.label}</a>
        <label>
            <input 
                aria-label="Your information will be safe with us" 
                type={props.type} 
                value={props.value} 
                name={props.name} 
                required 
                placeholder={props.placeholder} 
                onChange={props.onChange}
            />
            {props.isPassword ? <img src={props.eyeImg} id="visibility" onClick={props.onClick}  alt="Change password visibility" /> : ""}
        </label>
        </>
    )
} 

export default Input