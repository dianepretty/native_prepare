import { StyleSheet, Text, View,TextInput,TouchableOpacity,StatusBar,Image } from 'react-native'
import React, { useState } from 'react'

const Signup = ({navigation}) => {
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
  function log(){
    console.log(email,pass);
  }
  return (
    <View>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      <View>
    <Image source={require('../images/shape.png')} style={{width:270,margin:0}} resizeMode="cover">

</Image>
      </View>
      <Text style={{fontWeight:"bold",fontSize:15, textAlign:"center",marginTop:50}}>Welcome to Board</Text>
      <Text style={{marginTop:15,marginLeft:40,marginRight:40,textAlign:"center"}}>
      Let’s hope you finish your tasks 
      </Text>
      


<View style={{marginTop:40}}>
  <View>
  <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Enter name"
        keyboardType="default"
      />
  </View>
  <View>
  <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Enter email"
        keyboardType="email-address"
      />
  </View>
  <View>
  <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Enter password"
       
      />
  </View>
  <View>
  <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="Confirm Password"
       
      />
  </View>


</View>


<TouchableOpacity onPress={()=>navigation.navigate("Login")} style={{backgroundColor:"#358B9B",padding:15,alignItems:"center"
     ,marginTop:40 ,marginLeft:40,marginRight:40,borderRadius:4}}>
        <Text style={{color:"white"}}>Login</Text>
      </TouchableOpacity>

      <View style={{alignItems:"center",marginTop:40}}>
  <View style={{flexDirection:"row"}}>
  <Text>Have an account ?</Text>
  <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
<Text style={{color:"#358B9B",marginLeft:5}}>Login</Text>
</TouchableOpacity>
  </View>

</View>
     
    </View>

  )
}

export default Signup;

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginTop:20,
    marginLeft:40,
    marginRight:40,
   
    padding: 10,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:100,
    backgroundColor:"white"
  },
})