/**
 * @description      : 
 * @author           : Hello
 * @group            : 
 * @created          : 01/05/2024 - 12:20:18
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 01/05/2024
 * - Author          : Hello
 * - Modification    : 
 **/
import { createContext, useContext } from 'react'

export const ThemeContext = createContext({
    ThemeMode: "",
    DarkTheme: () => {},
    LightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider
export default function Theme() {
    return useContext(ThemeContext)
}