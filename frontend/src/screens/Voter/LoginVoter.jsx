import { StyleSheet, Text, View,TextInput,TouchableOpacity,StatusBar,Image ,Modal} from 'react-native'
import React, { useState } from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import  {setAuth} from "../../features/counterSlice"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
let storeData = async () => {
    try {
      await AsyncStorage.setItem(
      'name','pretty'
      );
    } catch (error) {
      // Error saving data
    }
    
  };
  let retrieveData = async () => {
    storeData();
   
    try {
      const value = await AsyncStorage.getItem('name');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

const [email,setEmail]=useState("");
const [pass,setPass]=useState("");
const auth=useSelector(state=>state.counter.authorized);
const dispatch = useDispatch()
const [modalVisible, setModalVisible] = useState(false);

const login=()=>{
  navigation.navigate("Voting")
  // axios.post("http://10.0.2.2:4300/user/login",{
  //   email:email,
  //   password:pass
  // }).then((res)=>{
  //  dispatch(setAuth(true));
  // }).catch(err=>{
  //   setModalVisible(true);
  // })

}

  
 
  return (
    <View>

<Modal
     
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View  style={{height:"25%",marginTop:"30%" , marginLeft:20,marginRight:20 , backgroundColor:"white",alignItems:"center",justifyContent:"center",}}>
        <Text>Please check your inputs</Text>
        
        <TouchableOpacity onPress={()=>setModalVisible(false)} style={{backgroundColor:"tomato",marginTop:40,padding:10,paddingHorizontal:50}}>
          <Text style={{color:"white"}}>Close</Text>
        </TouchableOpacity>
        </View>
      </Modal>


      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      <View>
    <Image source={require('../../images/shape.png')} style={{width:270,margin:0}} resizeMode="cover">

      

</Image>
      </View>
      <Text style={{fontWeight:"bold",fontSize:15, textAlign:"center",marginTop:50}}>Vote for your leaders</Text>
      <Text style={{textAlign:"center",marginTop:20, lineHeight:25, color:"gray",marginLeft:20,marginRight:20,marginBottom:10}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime doloremque eveniet illo odio ex ratione minima mollitia! Accusamus quos ad ex. Commodi ut totam a recusandae corporis deserunt, ad veritatis? </Text>
      <View style={{alignItems:"center",marginTop:15}}>

</View>


<View>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={newEmail=>setEmail(newEmail)}
        value={email}
        placeholder="Enter email"
        keyboardType="email-address"
      />
  </View>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={newPass=>setPass(newPass)}
        value={pass}
        placeholder="Enter password"
        keyboardType="email-address"
        secureTextEntry={true}
      />
  </View>

  <Text style={{marginTop:25,marginBottom:25,color:"#358B9B",textAlign:"center"}}>
    forgot password?
  </Text>
</View>


<TouchableOpacity onPress={()=>{login()}}  style={{backgroundColor:"#358B9B",padding:15,alignItems:"center"
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