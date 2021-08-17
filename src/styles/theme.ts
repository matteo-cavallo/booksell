import { createContext, useEffect } from "react"
import { StyleSheet, useColorScheme } from "react-native"

// Theme interface, keep calm and use Interface
export interface Theme {
    colors: {
        accent: string;
        accentDisabled: string;
        primary: string;
        secondary: string;
        tertiary: string;
        fillPrimary: string;
        fillSecondary: string;
        fillTertiary: string;
    }
}

// Light Theme
export const LightTheme: Theme = {
    colors: {
        accent: "#43D267",
        accentDisabled: "rgba(67, 210, 103, 0.5)",
        primary: "#000000",
        secondary: "rgba(60, 60, 67, 0.6)",
        tertiary: "rgba(60, 60, 67, 0.3)",
        fillPrimary: "rgba(120, 120, 128, 0.2)",
        fillSecondary: "rgba(120, 120, 128, 0.16)",
        fillTertiary: "rgba(118, 118, 128, 0.12)"
    }
}

// Override of Light theme, but can be also customized
export const DarkTheme: Theme = {
    ...LightTheme,
    colors: {
        ...LightTheme.colors,
        primary: "#FFFFFF",
        secondary: "rgba(235, 235, 245, 0.6)",
        tertiary: "rgba(235, 235, 245, 0.3)",
        fillTertiary: "#3A3A3C"
    }
}


export const FontStyle = StyleSheet.create({
    caption: {
        fontSize: 12
    },
    body: {
        fontSize: 17
    },
    headline: {
        fontSize: 17,
        fontWeight: "bold"
    },
    footnote: {
        fontSize: 13
    },
    footnoteBold: {
        fontSize: 13,
        fontWeight: "bold"
    },
    title1: {
        fontSize: 28,
        fontWeight: "bold"
    },
    largeTitle: {
        fontSize: 34
    }
})