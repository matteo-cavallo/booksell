import { FC } from "react";
import { TextInputProps, View, ViewStyle } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import React from 'react';
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { FontStyle } from "../styles/theme";
import { Icon } from "react-native-elements/dist/icons/Icon";

interface TextFieldComponentProps extends TextInputProps{
    iconName?:string, // to display also the icon the only requirement needed
    iconSize?:number,
    iconColor?:string,
    containerStyle: ViewStyle, //Defines the stile for the view container
}


export const TextFieldComponent: FC<TextFieldComponentProps> = (props) => {
    const {colors} = useContext(ThemeContext)

    //Default values for props
    const {iconName,iconColor = colors.accent, iconSize=20 } = props

    const customStyle = StyleSheet.create({
        container: {
            height: 50, 
            backgroundColor: colors.fillTertiary,
            borderRadius: 16,
            paddingHorizontal: 16,
            fontSize: FontStyle.body.fontSize,
            color: colors.primary,
            flex:1,
            flexDirection:"row",
            alignItems:"center",
        },
        icon:{
            paddingHorizontal: 10,
        },
        field:{
            flex:1,
            flexDirection:"row",
            alignItems:"center",
            

        }
    })


    return (
        <View style={[props.containerStyle,customStyle.container]}>
            {iconName && <Icon style={customStyle.icon} name={iconName} size={iconSize} color={iconColor} />}
            <TextInput {...props} style={[props.style, customStyle.field]}/>
        </View>
    )
}