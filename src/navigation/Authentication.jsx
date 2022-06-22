import React from "react";
import { View } from "react-native";
import Login from "../screens/Login";
// import Landing from "../screens/Landing";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from "../screens/Landing";

const Stack = createNativeStackNavigator();

const AuthNavigator=()=>{
return(
    <Stack.Navigator initialRouteName="Home"
    // screenOptions={{
    //     headerShown:false
    // }}
    >
       <Stack.Screen name="Home" options={{headerShown:false}}   component={Landing} />
       <Stack.Screen options={{headerShown:true}} name="Login" component={Login} />
      
        </Stack.Navigator>
)
}

export default AuthNavigator;