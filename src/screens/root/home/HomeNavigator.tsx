import { useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react'
import { HomeScreen } from './pages/HomePage';

export const HomeNavigator = () => {

    const navigation = useNavigation()
    const HomeStack = createNativeStackNavigator()

    return (
        <HomeStack.Navigator>
           <HomeStack.Screen name="Home_Screen" component={HomeScreen} options={{title:"Home"}}/> 
        </HomeStack.Navigator>
    )
}
