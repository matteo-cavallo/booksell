import { useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { HomeScreen } from './HomeScreen';

export const HomeNavigator = () => {

    const navigation = useNavigation()
    const HomeStack = createNativeStackNavigator()

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen component={HomeScreen} name="HomeScreen"/>
        </HomeStack.Navigator>
    )
}
