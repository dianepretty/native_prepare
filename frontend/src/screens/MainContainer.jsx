import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from './Bottom/Home'
import Details from './Bottom/Details'
import Settings from './Bottom/Settings'

const homeName='Home'
const detailsName='Details'
const settingsName='Settings'

const Tab=createBottomTabNavigator();

const MainContainer = () => {
  return (
//   <NavigationContainer>
    <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({route})=>({


        tabBarIcon: ({focused,color,size})=>{
            let iconName;
            let rn= route.name;

            if(rn===homeName){
                iconName=focused?'home':'home-outline'
            }
            else if(rn===detailsName){
                iconName=focused ? 'list':'list-outline'
            }
            else if(rn===settingsName){
                iconName=focused?'settings':'settings-outline'
            }
            return <Ionicons name={iconName} size={size} color={color}></Ionicons>
        },
        tabBarActiveTintColor: "#358B9B",
        tabBarInactiveTintColor: "black",
        headerShown: true,
        tabBarStyle: {
          position: "absolute",
          right: 3,
          left: 3,
          height: 80,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          ...styles.shadow}

    })}
  
    >

        <Tab.Screen name={homeName} options={{headerShown:false}} component ={Home}/>
        <Tab.Screen name={detailsName} component ={Details}/>
        <Tab.Screen name={settingsName} component ={Settings}/>



    </Tab.Navigator>
//   </NavigationContainer>
  )
}

export default MainContainer

const styles = StyleSheet.create({

})