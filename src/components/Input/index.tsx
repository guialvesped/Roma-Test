import React from "react";
import './input.css'

interface InputProps {
    type : string,
    placeholder : string,
    label : string,
    addValue : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input : React.FC<InputProps> = (props : InputProps) => {
    return(
        <>
        <label>
            <a>{props.label}</a>
            <input type={props.type} required placeholder={props.placeholder} onChange={props.addValue}/>
        </label>
        </>
    )
} 

export default Input