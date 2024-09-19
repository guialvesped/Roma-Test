import React, { useEffect, useState } from "react";
import Input from "../Input";
import './form.css';
import Logo from '../../assets/img/logo.png';
import SwitchBox from "../Switch";
import googleLogo from '../../assets/img/google-logo.svg'
import eyeOn from '../../assets/img/eyeOn.svg'
import eyeOff from '../../assets/img/eyeOff.svg'

    interface FormData {
        emailPhone : string,
        password : string
    }
    interface FormErrors {
        emailPhone?: string,
        password?: string
      }

const Form : React.FC = () => {
    const [formData, setFormData] = useState<FormData>({emailPhone:"", password:""})//Usado para salvar os dados inseridos
    const [formErrors, setFormErrors] = useState<FormErrors>({})//Usado para salvar os erros do dados
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);//Usado para impedir o envio do formulário

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const validate = () => { //Valida se os campos de email e senha são validos
        const errors : FormErrors = {};
        if (!formData.emailPhone) {
            errors.emailPhone = "O campo email é obrigatório.";
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(formData.emailPhone)) {
              errors.emailPhone = "Por favor, insira um email válido.";
            }
        }
        if(!formData.password){
            errors.password = "Insira sua senha"
        } else if(formData.password.length < 5){
            errors.password = "Insira uma senha com mais de 5 caracteres."
        }

        return errors
    };

    useEffect(() => { //Troca o FormErrors sempre que os dados inseridos ou o Issubmitting mudam
        if (isSubmitting) {
          setFormErrors(validate());
        }
      }, [formData, isSubmitting]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { //Previne que o formulário seja enviado até os dados serem válidos
        e.preventDefault();
        setIsSubmitting(true);

        const errors = validate();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
        console.log("Formulário enviado com sucesso!", formData);
        setIsSubmitting(false);
        }
    };

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);//Muda a visibilidade da senha

    const togglePasswordVisibility = () => {//Garante a mudança do estado da visibilidade
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <>
        <div className="container">
            <img src={Logo} alt="Our Logo" />
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Nice to see you again</h2>
                    <Input 
                        type="text"
                        placeholder="Email or phone number" 
                        label="Login" 
                        isPassword = {false}
                        name="emailPhone"
                        value={formData.emailPhone}
                        onChange={handleChange}
                    />
                    {formErrors.emailPhone && <a className="error" aria-label="Email/Phone registration error">{formErrors.emailPhone}</a>}
                    <Input 
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Enter password" 
                        label="Password" 
                        name="password"
                        value={formData.password}
                        isPassword= {true}
                        eyeImg={isPasswordVisible ? eyeOff : eyeOn}
                        onClick={togglePasswordVisibility}
                        onChange={handleChange}
                    />
                    {formErrors.password && <a className="error" aria-label="Password registration error">{formErrors.password}</a>}
                    <SwitchBox/>
                    <button id="submit" type="submit" aria-label="Submit the form" >Sign In</button>
                </form>
                <div className="signGoogle">
                    <button aria-label="Sign in our website with your google account">
                        <img src={googleLogo} alt="" />
                        Or sign in with Google
                    </button>
                    <p>
                        Don't have an account?
                        <a href="#" id="signUp" aria-label="Sign up">
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