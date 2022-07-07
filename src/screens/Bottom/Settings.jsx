import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View>

      <View style={styles.logcontainer}>
      <TouchableOpacity style={styles.logout}>
      <Text style={{fontWeight:"bold",color:"white"}}>Click here to logout</Text>
      </TouchableOpacity>
      </View>
     

    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  logout:{
  backgroundColor:"tomato",
  padding:25,
  
  },
  logcontainer:{
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
  }
})