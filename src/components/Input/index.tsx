import React from "react";
import './input.css'

interface InputProps {
    type : string,//Tipo do input
    placeholder : string,//Placeholder do input
    label : string,//Texto do label
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void,//Função que realiza sempre que os dados mudam
    isPassword : boolean,//Usado para notificar se é um input de senha ou não
    onClick ?: () => void,//Muda a visibilidade da senha com click
    value : string,//valor para ser guardado nas variáveis
    name : string,//nome para identificar de onde pegar os dados
    eyeImg ?: string;//Imagem para mudar a visibilidade da senha
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
                placeholder={props.placeholder} 
                onChange={props.onChange}
            />
            {props.isPassword ? <img src={props.eyeImg} id="visibility" onClick={props.onClick}  alt="Change password visibility" /> : ""}
        </label>
        </>
    )
} 

export default Input