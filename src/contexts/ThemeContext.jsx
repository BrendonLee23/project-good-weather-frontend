import { createContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import PropTypes from "prop-types"; 

export const ThemeContext = createContext();

    const lightTheme = {
    background: "#ffffff",
    text: "#000000",
    placeholder: "#1c1c1c",
    border: '#f3f1f1',
    h1: '#030303',
    input:  '#dedede'
    };


    const darkTheme = {
    placeholder: "#c8c8c8",
    background: "#121212",
    text: "#ffffff",
    border: '#444',
    h1: '#e1dfdf',
    input:  '#333'
    };

    export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
    if (isDarkMode) {
    document.body.setAttribute("data-theme", "dark");
    } else {
    document.body.removeAttribute("data-theme");
    }
    }, [isDarkMode]);

    return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
    <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    {children}
    </StyledThemeProvider>
    </ThemeContext.Provider>
    );
    };


ThemeProvider.propTypes = {
children: PropTypes.node.isRequired, 
};
