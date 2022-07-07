import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Todo from '../screens/Todo';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
 <Stack.Navigator>
 <Stack.Screen name="Todo" options={{headerShown:false}}   component={Todo} />
 </Stack.Navigator>
  )
}

export default StackNavigator