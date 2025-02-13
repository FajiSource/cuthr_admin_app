import { Outlet } from "react-router-dom";
import { useTheme } from "../providers/ThemeProvider";
import { useState } from "react";
import Logo from "../components/ui/Logo";

export default function DefaultLayout() {
    const { theme, toggleTheme } = useTheme();
    const [isLogged, setIsLogged] = useState(true);
    return (
        <>

            <main id={theme}>

                {
                    isLogged && (

                        <nav className="admin-nav">
                            <div className="admin-logo">
                                <Logo />
                            </div>

                            <div  className="nav-links">
                                <a href="" className="text">Dashboard</a>
                                <a href="" className="text">Add New Event</a>
                                <a href="" className="text">User and Roles</a>
                            </div>

                            <div className="admin-logout">
                                <a href="" className="text">Logout</a>
                            </div>
                        </nav>
                    )
                }
                <div className="main-content">
                    {isLogged && (<div className="text content-header"> Hello! Had you have your coffee?</div>)}
                    <Outlet />
                </div>
            </main>
        </>
    )
}