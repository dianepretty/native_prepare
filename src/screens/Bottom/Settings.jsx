import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { setAuth } from '../../features/counterSlice'
import { useDispatch,useSelector } from 'react-redux'

const Settings = () => {
  const dispatch=useDispatch();


  return (
    <View>

      <View style={styles.logcontainer}>
      <TouchableOpacity onPress={()=>dispatch(setAuth())} style={styles.logout}>
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