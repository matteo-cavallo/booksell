import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useColorScheme } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { HomeNavigator } from './home/HomeNavigator'

export const TabController = () => {

    const Tabs = createBottomTabNavigator()

    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home_Tab" component={HomeNavigator} options={{headerShown: false}}/>
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({})
