import { FC } from "react";
import { TextInputProps } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React from 'react';
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { FontStyle } from "../styles/theme";

export const TextFieldComponent: FC<TextInputProps> = (props) => {

    const {colors} = useContext(ThemeContext)

    const customStyle = StyleSheet.create({
        container: {
            width: '100%',
            height: 50, 
            backgroundColor: colors.fillTertiary,
            borderRadius: 16,
            paddingHorizontal: 16,
            fontSize: FontStyle.body.fontSize,
            color: colors.primary
        }
    })

    return (
        <TextInput {...props} style={[props.style, customStyle.container]}/>
    )
}