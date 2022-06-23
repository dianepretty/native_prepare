import { StyleSheet, Text, View,TextInput,TouchableOpacity,StatusBar,Image } from 'react-native'
import React, { useState } from 'react'
import { useContext } from 'react';
// import { UserContext } from '../../MyContext';
import { useSelector, useDispatch } from 'react-redux'
import { setName,setAge } from '../redux/actions'
import { UserContext } from '../../MyContext';


const Login = ({navigation}) => {
    const{auth,setAuth}=useContext(UserContext); 
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    function change(){
      setAuth(true);
    }
   

  
 
  return (
    <View>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      <View>
    <Image source={require('../images/shape.png')} style={{width:270,margin:0}} resizeMode="cover">

</Image>
      </View>
      <Text style={{fontWeight:"bold",fontSize:15, textAlign:"center",marginTop:50}}>Welcome back</Text>
      <View style={{alignItems:"center",marginTop:15}}>
<Image source={require('../images/log.png')} resizeMode="contain" style={{width:170}}  ></Image>
</View>


<View>
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
        placeholder="Enter email"
        keyboardType="email-address"
      />
  </View>

  <Text style={{marginTop:25,marginBottom:25,color:"#358B9B",textAlign:"center"}}>
    forgot password?
  </Text>
</View>


<TouchableOpacity onPress={()=>change()}  style={{backgroundColor:"#358B9B",padding:15,alignItems:"center"
      ,marginLeft:40,marginRight:40,borderRadius:4}}>
        <Text style={{color:"white"}}>Login</Text>
      </TouchableOpacity>

<View style={{alignItems:"center",marginTop:40}}>
  <View style={{flexDirection:"row"}}>
  <Text>Have an account ?</Text>
  <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
<Text style={{color:"#358B9B",marginLeft:5}}>Signup</Text>
</TouchableOpacity>
  </View>

</View>
     
    </View>

  )
}

export default Login;

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