import React from "react";
import { View } from "react-native";
import Login from "../screens/Login";
// import Landing from "../screens/Landing";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from "../screens/Landing";
import Signup from "../screens/Signup";

const Stack = createNativeStackNavigator();

const AuthNavigator=()=>{
return(
    <Stack.Navigator initialRouteName="Home"
    // screenOptions={{
    //     headerShown:false
    // }}
    >
       <Stack.Screen name="Home" options={{headerShown:false}}   component={Landing} />
       <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
       <Stack.Screen options={{headerShown:false}} name="Signup" component={Signup} />
      
        </Stack.Navigator>
)
}

export default AuthNavigator;