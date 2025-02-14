import { Outlet, useNavigate } from "react-router-dom";
import { useTheme } from "../providers/ThemeProvider";
import { useState } from "react";
import Logo from "../components/ui/Logo";
import { useAuth } from "../providers/AuthProvider";

export default function DefaultLayout() {
    const { theme } = useTheme();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(true); 

    const handleBack = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <main id={theme}>
            {user && (
                <nav className="admin-nav">
                    <div className="admin-logo">
                        <Logo />
                    </div>

                    <div className={`nav-links ${menuOpen ? "block" : "hidden"}`}>
                        <button className="text menu-back" onClick={handleBack}>Back</button>
                        <a href="" className="text">Dashboard</a>
                        <a href="" className="text">Add New Event</a>
                        <a href="" className="text">User and Roles</a>
                    </div>

                    <div className="admin-logout">
                        <a href="" className="text">Logout</a>
                    </div>

                    <div>
                        <button className="text" onClick={toggleMenu}>Menu</button>
                    </div>
                </nav>
            )}
            <div className="main-content">
                {user && <div className="text content-header"> Hello! Had you have your coffee?</div>}
                <Outlet />
            </div>
        </main>
    );
}
