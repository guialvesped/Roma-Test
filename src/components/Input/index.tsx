import React from "react";
import './input.css'

interface InputProps {
    type : string,
    placeholder : string,
    label : string,
    addValue : (e: React.ChangeEvent<HTMLInputElement>) => void,
    isPassword : boolean,
    onClick ?: () => void,
    eyeImg ?: string;
}

const Input : React.FC<InputProps> = (props : InputProps) => {
    return(
        <>
        <a>{props.label}</a>
        <label>
            <input type={props.type} required placeholder={props.placeholder} onChange={props.addValue}/>
            {props.isPassword ? <img src={props.eyeImg} id="visibility" onClick={props.onClick}  alt="Mudar visibilidade" /> : ""}
        </label>
        </>
    )
} 

export default Input