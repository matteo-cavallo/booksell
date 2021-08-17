import { FC } from "react"
import { Touchable, TouchableOpacity, Text, StyleSheet } from "react-native"
import { ButtonProps } from "react-native-elements"
import React from "react"
import { useContext } from "react"
import { ThemeContext } from "../../App"
import { FontStyle } from "../styles/theme"


export const ButtonComponent: FC<ButtonProps> = (props) => {

    const {colors} = useContext(ThemeContext)

    const customStyle = StyleSheet.create({
        button: {
            width: '100%',
            borderRadius: 16,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: !props.disabled ? colors.accent : colors.accentDisabled
        },
        text: {
            color: "#FFFFFF"
        }
    })

    return (
        <TouchableOpacity {...props} style={[props.style, customStyle.button]}>
            <Text style={[FontStyle.headline, customStyle.text]}>{props.title}</Text>
        </TouchableOpacity>
    )
}