import { FC, useState } from "react";
import { TextInputProps, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React from 'react';
import { StyleSheet, Text } from "react-native";
import { useContext } from "react";
import { FontStyle } from "../styles/theme";
import { useCustomTheme } from "../styles/themeHook";
import { Icon } from "react-native-elements";

interface CustomTextInputProps extends TextInputProps {
    deleteButtonEnabled?: boolean
    footer?: string;
}

export const TextFieldComponent: FC<CustomTextInputProps> = (props) => {

    const {theme} = useCustomTheme()

    const customStyle = StyleSheet.create({
        container: {
            height: 50, 
            backgroundColor: theme.colors.fillTertiary,
            borderRadius: 16,
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 16,
        },
        text: {
            color: theme.colors.primary,
            fontSize: 17,
            flex: 1,
        },
        icon: {
            padding: 8,
        },
        footer: {
            color: theme.colors.secondary,
            marginTop: 8,
            marginHorizontal: 16
        }
    })    

    const handleDelete = () => {
        if (props.onChangeText){
            props.onChangeText("")
        }
    }

    const deleteButton = () => {
        if (props.deleteButtonEnabled) {
            return (
                <TouchableOpacity onPress={ () => handleDelete()}>
                    <Icon name="closecircle" type="antdesign" size={17} color={theme.colors.secondary} style={customStyle.icon}/>
                </TouchableOpacity>
            )
        }
    }

    const footer = () => {
        if (props.footer){
            return <Text style={[FontStyle.caption, customStyle.footer]}>{props.footer}</Text>
        }
    }


    return (
        <View style={{marginBottom: 16}}>
            <View style={customStyle.container}>
                <TextInput style={[customStyle.text]} {...props} placeholderTextColor={theme.colors.secondary}/>
                {deleteButton()}
            </View>
            {footer()}
        </View>
    )
}