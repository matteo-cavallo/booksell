import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useColorScheme } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { HomeScreen } from './home/HomeScreen'

export const TabController = () => {


    const Tabs = createBottomTabNavigator()

    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Login" component={HomeScreen} options={{headerShown: false}} />
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({})
