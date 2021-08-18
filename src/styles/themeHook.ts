import { useEffect, useState } from "react"
import { LightTheme, DarkTheme } from "./theme"
import { useColorScheme } from "react-native"

/**
 * Bookshare Theme Hook
 * 
 * This hook provides the main theme of the app.
 * It provides the right color based on color scheme.
 * 
 * It gives also the current color scheme.
 */
export const useCustomTheme = () => {

    // Global Color Scheme
    const colorScheme = useColorScheme()

    // Our Theme
    const [theme, setTheme] = useState(LightTheme)

    useEffect(() => {
        if (colorScheme === "light") {
            setTheme(LightTheme)
        } else {
            setTheme(DarkTheme)
        }
    },[colorScheme])

    return {theme, colorScheme}
}