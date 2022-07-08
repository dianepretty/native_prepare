import { TextInput,TouchableOpacity , Modal,StyleSheet, Text, View,ScrollView,StatusBar,Image } from 'react-native'
import React  from 'react'
import { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { useEffect } from 'react';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Voting = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [hold,setHold]=useState([]);
 const [data,setData]=useState([])
 let ct=0;

 useEffect(() => {
  // Update the document title using the browser API
  axios.get("http://10.0.2.2:4300/candidate/get-all")
  .then(res=>{
    addData(res.data.data);
  })
  .catch(err=>{
    console.log(err);
  })
});

 const [task,setTask]=useState("");

 const updateData = ( index) => {
  
    let placeHolderObject = data;

    placeHolderObject[index].done = !placeHolderObject[index].done;
    
    setData(placeHolderObject)
   

   

 }

 function addData(value){
  let placeHolderObject = value;
   placeHolderObject.push(value)
  // console.log(placeHolderObject[0]);
   setData(placeHolderObject)
 }

 const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      <View>
    <Image source={require('../../images/shape.png')} style={{width:200,margin:0}} resizeMode="cover"></Image>
  </View>
    

   <View>
   

    <View style={styles.box} >
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <Text style={{marginLeft:20,fontWeight:"bold", fontSize:20,marginBottom:15}}>
      Candidates
    </Text>
    <TouchableOpacity onPress={()=>navigation.navigation("Login")} >
    <Text style={{color:"tomato",marginRight:20, fontSize:15,marginBottom:15}}>
      Done 
    </Text>
    </TouchableOpacity>
   
      </View>
  
    <View style={{alignItems:"center",justifyContent:"center",marginBottom:40}}>
</View>
<View style={{flexDirection:"row",justifyContent:"center",marginBottom:10}} >
<View style={{width:"50%"}}>
<Text style={{fontWeight:"bold"}} >Names</Text>
</View>
<View style={{width:"50%"}}>
<Text style={{textAlign:"center",fontWeight:"bold"}}>Action</Text>
</View>
</View>
    <ScrollView  >

{data.map((item,counter)=>(

<View key={counter}>
<View style={{flexDirection:"row"}} >
<View style={{width:"50%"}}>
    <Text style={{marginTop:18}}>{item.name}</Text>
    </View>
    <View style={{width:"50%"}}>
        <TouchableOpacity>
        <MaterialCommunityIcons style={{textAlign:"center",paddingTop:10,paddingBottom:10}} name="vote" size={24} color="black" />
        </TouchableOpacity>
    
    </View>






<View>

</View>
   </View>
   <View key={item.nationalId}   style={{backgroundColor:"black",height:1,marginTop:4}}>

</View>
</View>
   
))}
 </ScrollView>
    </View>
   </View>
    </View>
  )
}

export default Voting
const styles = StyleSheet.create({

    container:{
      
     backgroundColor:"#EEEEEE",
     height:"100%"
    },
    box:{
      marginLeft:40,
      marginRight:30,
      backgroundColor:"",
   shadowColor:"black",
   
  shadowOpacity:1,
  shadowRadius:10,
  paddingTop:20,
  paddingBottom:40
  
    },
    
    input: {
      height: 50,
      // marginTop:20,
      // marginLeft:40,
      // marginRight:40,
     width:"80%",
      padding: 10,
      paddingLeft:20,
      paddingRight:20,
      borderRadius:100,
      backgroundColor:"white"
    },
})