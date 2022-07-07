import { StyleSheet, Text,Image, View,TextInput,TouchableOpacity,StatusBar,ImageBackground, } from 'react-native'
import React, { useState } from 'react'
import shape from "../images/shape.png"


const Landing = ({navigation}) => {
  return (
    <View style={styles.container} >
<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>

    <View>
    <Image source={require('../images/shape.png')} style={{width:270,margin:0}} resizeMode="cover">

</Image>
      </View>

      <View style={{marginTop:20}}>

      <View style={{alignItems:"center",marginTop:100}}>
<Image source={require('../images/mobile.png')}  ></Image>
</View>

     <View>
      <Text style={{fontWeight:"bold",fontSize:15, textAlign:"center",marginTop:80}}>Get everything done with Todo</Text>
      <Text style={{marginTop:15,marginLeft:40,marginRight:40,textAlign:"center"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis donec scelerisque egestas consectetur. Elit integer at eleifend purus lorem. Posuere duis tincidunt velit tristique dignissim viverra aenean.
      </Text>

      <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={{backgroundColor:"#358B9B",padding:15,alignItems:"center",marginTop:40
      ,marginLeft:40,marginRight:40,borderRadius:4}}>
        <Text style={{color:"white"}}>Get started</Text>
      </TouchableOpacity>
     </View>
        </View> 


    
    
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({
container:{
  
 backgroundColor:"#EEEEEE",
 height:"100%"
},

})