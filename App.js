import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigators/AppNavigator'
import { DarkModeProvider } from './src/state/DarkModeContext'

const App = () => {
  return (
    <DarkModeProvider>
    <NavigationContainer>
   <AppNavigator/>
    </NavigationContainer>
    </DarkModeProvider>
  )
}

export default App

const styles = StyleSheet.create({})