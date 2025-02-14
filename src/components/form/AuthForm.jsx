import { Link, Navigate, useNavigate } from "react-router-dom";
import Logo from "../ui/Logo";
import {  useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";

export default function AuthForm() {
    const {setUser} = useAuth();
    useEffect(() => {
        setUser(false);
    }, [])
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(true);
        navigate("/dashboard");
    };
    return(
       <div className="auth-container">
            <div className="auth-header"> 
                <Logo/>
            </div>
             <form action="" onSubmit={handleSubmit}>
                <input type="email" className="bg" placeholder="Email"/>
                <input type="password"  className="bg" placeholder="Password"/>
                <span className="text">
                    <a>Forgot password?</a>
                </span>

                <button type="submit" className="text">SIGN IN</button>
            </form>

            <span className="text">Don't have an account yet? <br/> 
                <a>Sign up</a> here!
            </span>
       </div>
    )
}