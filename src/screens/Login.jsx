import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Login = ({navigation}) => {
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
  function log(){
    console.log(email,pass);
  }
  return (
    <View>
        <View style={styles.puts}>
        <View>
        <Text>Enter your email</Text>
     <TextInput  onChangeText={newEmail=> setEmail(newEmail)} defaultValue={email} style={styles.in}></TextInput>
        </View>

        <View style={{marginTop:80}}>
        <Text>Enter password</Text>
     <TextInput onChangeText={newPass=>setPass(newPass)} defaultValue={pass} style={styles.in}></TextInput>
        </View>
        </View>
       
       <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={{backgroundColor:"orange",height:50,margin:120,alignItems:"center", justifyContent:"center"}}>
        <Text >Login</Text>
       </TouchableOpacity>
    
    </View>
  )
}

export default Login;

const styles = StyleSheet.create({
in:{
    borderWidth:0.8,
    borderRadius:20,
    height:60,
    paddingLeft:20,
    paddingRight:10

},
puts:{
margin:50
}
})