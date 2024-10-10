import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},   // Global variable which are accessible across the project through  
    lightTheme: () => {},  // Context Provider
}) 

export const ThemeProvider = ThemeContext.Provider   // ThemeProvider is wrapper

export default  function useTheme() {    // useTheme is custom hook for using useContext
    return useContext(ThemeContext) 
}
