import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Voter/LoginVoter';
import SignupVoter from "../screens/Voter/SignupVoter"
import Voting from '../screens/Voter/Voting';
import Views from '../screens/Voter/View';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
 <Stack.Navigator initialRouteName="Login">
 <Stack.Screen name="Login" options={{headerShown:false}}   component={Login} />
 <Stack.Screen name="Signup" options={{headerShown:false}}   component={SignupVoter} />
 <Stack.Screen name="Voting" options={{headerShown:false}}   component={Voting} />
 <Stack.Screen name="Views" options={{headerShown:false}}   component={Views} />
 </Stack.Navigator>
  )
}

export default StackNavigator