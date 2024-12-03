import { useContext } from "react";
import { ThemeCTX } from "../layouts/ThemeProvider";

const useTheme = () => {
    const context = useContext(ThemeCTX);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};

export default useTheme;