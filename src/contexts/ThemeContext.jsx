import { createContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import PropTypes from "prop-types"; 

export const ThemeContext = createContext();

    const lightTheme = {
    background: "#ffffff",
    rightBackground: "#D8D8D8",
    placeholder: "#1c1c1c",
    text: "#000000",
    border: '#f3f1f1',
    h1: '#030303',
    input:  '#dedede',
    h2: '#757575',
    sugestion: '#08164e'
    };


    const darkTheme = {
    background: "#090909",
    rightBackground: "#242424",
    placeholder: "#c8c8c8",
    text: "#ffffff",
    border: '#0c0c0c',
    h1: '#e1dfdf',
    input:  '#333',
        h2: "#fefefe",
    sugestion: '#2d56f8'
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
