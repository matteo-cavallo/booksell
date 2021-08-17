import React,{ FC, PropsWithChildren, ReactChildren }  from 'react';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';
import { TextProps } from 'react-native';
import { ThemeContext } from '../../App';

interface CustomTextProps extends TextProps {
    type: "Primary" | "Secondary"
}

export const TextComponent: FC<CustomTextProps> = (props) => {

    const {colors} = useContext(ThemeContext)

    // Computed Color for Text Field
    const color = props.type === "Primary" ? colors.primary :  props.type === "Secondary" ? colors.secondary: colors.primary

    const customStyle = StyleSheet.create({
        text: {
            color: color
        }
    })

    return (
        <Text style={[customStyle.text, props?.style]}>{props.children}</Text>
    )
} 