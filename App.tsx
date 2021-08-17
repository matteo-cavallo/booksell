import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons'
import { TabController } from './src/screens/root/tabController';


export default function App() {

  const colorScheme = useColorScheme()

  
  return (
    <NavigationContainer theme={colorScheme === "light" ? DefaultTheme : DarkTheme}>      
      <TabController />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
