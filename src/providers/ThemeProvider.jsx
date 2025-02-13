import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext('light');

export const ThemeProvider  = ({children }) => {
    const [theme , setTheme] = useState('light');

    const  toggleTheme = (selected) => {
       setTheme(selected);
    };


    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);