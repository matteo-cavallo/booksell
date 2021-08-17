import { useNavigation } from '@react-navigation/native';
import React, { PropsWithChildren, ReactChildren } from 'react'
import { useEffect } from 'react';
import { View, Text, StyleSheet, useColorScheme, Appearance } from 'react-native'
import { TextProps } from 'react-native-elements';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { useTheme } from '../../../styles/theme';

export const HomeScreen = () => {

    const theme = useTheme()
    const navigation = useNavigation()


    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.backgroundColor
        },
        text: {
            fontSize: 34,
            color: theme.primaryColor,
            fontWeight: "bold"
        }
    })

    // TODO: component super figo

    const PrimaryText = (props: PropsWithChildren<TextProps>) => {

        const theme = useTheme()

        const customStyle = StyleSheet.create({
            text: {
                color: theme.primaryColor
            }
        })

        return(
            <Text style={[customStyle.text, props.style]} >{props.children}</Text>
        )
    }

  
    return (
        <View style={styles.container}>
            <PrimaryText style={{fontSize: 34}}>Ciao</PrimaryText>
        </View>
    )
}
