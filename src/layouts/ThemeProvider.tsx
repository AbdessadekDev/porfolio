import { createContext, FC, useState } from "react"
import { Outlet } from "react-router-dom";

interface ThemeCTXProps {
    theme: 'light' | 'dark',
    toggleTheme: () => void
}

export const ThemeCTX = createContext<ThemeCTXProps | undefined>(undefined);


const ThemeProvider: FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>(
        localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    );

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };
    
    return (
        <ThemeCTX.Provider value={{ theme, toggleTheme }}>
            <Outlet />
        </ThemeCTX.Provider>
    );
}

export default ThemeProvider