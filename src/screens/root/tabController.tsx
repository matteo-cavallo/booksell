import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { useColorScheme } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { useCustomTheme } from '../../styles/themeHook'
import { HomeNavigator } from './home/HomeNavigator'
import { ProfileNavigator } from './profile/ProfileNavigator'

export const TabController = () => {

    const Tabs = createBottomTabNavigator()
    const {theme} = useCustomTheme()

    return (
        <Tabs.Navigator screenOptions={{tabBarActiveTintColor: theme.colors.accent}}>
            <Tabs.Screen name="Home_Tab" component={HomeNavigator} options={{headerShown: false}}/>
            <Tabs.Screen name="Profile_Tab" component={ProfileNavigator} options={{headerShown: false}}/>
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({})
