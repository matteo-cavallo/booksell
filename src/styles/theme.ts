import { useEffect, useState } from "react"
import { ColorSchemeName, useColorScheme } from "react-native"

export const useTheme = () => {

    let colorScheme = useColorScheme();
    const [theme, setTheme] = useState(ColorsLight)

    useEffect( () => {
        if ( colorScheme == "light"){
            setTheme(ColorsLight)
        } else {
            setTheme(ColorsDark)
        }
        
    },[colorScheme])

  
    return theme
}

interface Colors {
    accent: string;
    backgroundColor: string;
    primaryColor: string
}

const ColorsDark: Colors = {
    accent: "#43D267",
    backgroundColor: "black",
    primaryColor: "white"
}

const ColorsLight: Colors = {
    accent: "#43D267",
    backgroundColor: "white",
    primaryColor: "black"
}