import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import IconButton from "../IconButton/IconButton.jsx";

const darkModeButton = (toggleTheme) => {
    return (
        <IconButton
            icon={"/asset/dark-mode.svg"}
            callBack={toggleTheme}
            altText={'Dark Mode'}
        />
    )
};

const lightModeButton = (toggleTheme) => {
    return (
        <IconButton
            icon={"/asset/light-mode.svg"}
            callBack={toggleTheme}
            altText={'Light Mode'}
        />
    )
};

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return theme === 'dark' ? darkModeButton(toggleTheme) : lightModeButton(toggleTheme);
};

export default ThemeToggleButton
