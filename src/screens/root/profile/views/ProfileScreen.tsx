import { Button, Modal, Text, View } from "react-native"
import { CenterComponent } from "../../../../shared/center.component"
import React from 'react'
import { useNavigation } from "@react-navigation/native"


export const ProfileScreen = () => {

    const navigation = useNavigation()

    return (
        <CenterComponent>
            <Button title="Go to home" onPress={() => navigation.navigate("HomeScreen")}/>
        </CenterComponent>
    )
}