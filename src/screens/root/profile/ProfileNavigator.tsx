import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ProfileScreen } from "./views/ProfileScreen"
import {ProfilePage} from "./views/ProfilePage"
import React from 'react'
import { Icon } from "react-native-elements/dist/icons/Icon"
import { Modal, Text } from "react-native"
import { CenterComponent } from "../../../shared/center.component"
import { useNavigation } from "@react-navigation/native"

export const ProfileNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} 
                options={{headerRight: ({tintColor}) => <Icon color={tintColor} name="person-circle" type="ionicon" />}}/>
        </Stack.Navigator>
    )
}