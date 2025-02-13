import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

export default function AuthForm() {

    return(
       <div className="auth-container">
            <div className="auth-header"> 
                <Logo/>
            </div>
             <form action="">
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