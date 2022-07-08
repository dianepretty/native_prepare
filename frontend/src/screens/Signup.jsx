import { StyleSheet, Text, View,TextInput,TouchableOpacity,StatusBar,Image,Modal } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';


const Signup = ({navigation}) => {

    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [name,setName]=useState("");
    const [modalVisible, setModalVisible] = useState(false);
const register=async()=>{
 await axios.post("http://10.0.2.2:4300/user/register",{
    email:email,
    name:name,
    password:pass
  })
  .then(res=>{

navigation.navigate("Login")


  }).catch(err=>{
    setModalVisible(true)

  })
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
     <Text>Double check your inputs, or maybe the email is taken</Text>
     <TouchableOpacity onPress={()=>setModalVisible(false)} style={{backgroundColor:"tomato",marginTop:40,padding:10,paddingHorizontal:50}}>
          <Text style={{color:"white"}}>Close</Text>
        </TouchableOpacity>
     </View>
   
   </Modal>

      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      <View>
    <Image source={require('../images/shape.png')} style={{width:270,margin:0}} resizeMode="cover">

</Image>
      </View>
      <Text style={{fontWeight:"bold",fontSize:15, textAlign:"center",marginTop:50}}>Welcome to Board</Text>
      <Text style={{marginTop:15,marginLeft:40,marginRight:40,textAlign:"center"}}>
      Signup to continue
      </Text>
      


<View style={{marginTop:40}}>
  <View>
   
  <TextInput
        style={styles.input}
         onChangeText={newName=>{setName(newName); }}
         value={name}
        placeholder="Enter name"
        keyboardType="default"
      />
  </View>
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
        secureTextEntry={true}
      />
  </View>



</View>


<TouchableOpacity onPress={()=>register()} style={{backgroundColor:"#358B9B",padding:15,alignItems:"center"
     ,marginTop:40 ,marginLeft:40,marginRight:40,borderRadius:4}}>
        <Text style={{color:"white"}}>Register</Text>
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
  text:{
    marginLeft:47,
  },
  input: {
    height: 50,
    marginTop:10,
    marginLeft:40,
    marginRight:40,
   
    padding: 10,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:100,
    backgroundColor:"white"
  },
})