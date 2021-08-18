import React,{ FC, PropsWithChildren } from "react"
import { StyleSheet, View } from "react-native"

export const CenterComponent: FC = ({children}) => {


    return(
        <View style={style.container}>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})