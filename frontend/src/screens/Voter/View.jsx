import { StyleSheet, Text, View ,TouchableOpacity,TextInput} from 'react-native'
import RNPickerSelect from "react-native-picker-select";
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Views = ({navigation}) => {
  const [gender,setGender]=useState("");
  const [names,setNames]=useState("");
  const [nationalId,setId]=useState();
  const [mission,setMission]=useState();


  const register=()=>{
    axios.post("http://10.0.2.2:4300/candidate/register",{
      name: names,
      nationalId: nationalId,
      gender: gender,
      mission: mission
    })
    .then(res=>{
      setGender("");
      setNames("");
      setId("");
      setMission("");
     
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <View>
      <Text style={{marginTop:30,fontSize:20,color:"#358B9B", fontWeight:"bold", marginLeft:20}}>Add new Candidate</Text>

      <View style={{marginTop:30}}>
      <View>
  <TextInput
        style={styles.input}
        onChangeText={newName=>setNames(newName)}
        value={names}
        placeholder="Enter name"
        keyboardType="email-address"
      />
  </View>
  <View>
  <TextInput
        style={styles.input}
        onChangeText={newId=>setId(newId)}
        value={nationalId}
        placeholder="Enter nationalId"
        keyboardType="email-address"
      
      />
  </View>
  <View style={{marginLeft:40,marginTop:30}}>
    <Text style={{marginLeft:7}}>Choose gender</Text>
  <RNPickerSelect
  
                 onValueChange={(value) => setGender(value)}
                 items={[
                     { label: "Female", value: "female" },
                     { label: "Male", value: "male" },
                    
                 ]}
             />
  </View>
  <View>
  <TextInput
        style={styles.textA}
        onChangeText={newMission=>setMission(newMission)}
         value={mission}
        placeholder="Enter missionStatement"
        multiline={true}
        numberOfLines={10}
      />
  </View>

 
</View>


<TouchableOpacity onPress={()=>{register()}}  style={{backgroundColor:"#358B9B",padding:15,alignItems:"center"
     ,marginTop:40 ,marginLeft:40,marginRight:40,borderRadius:4}}>
        <Text style={{color:"white"}}>Register</Text>
      </TouchableOpacity>
      </View>
    
  )
}

export default Views

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
  textA:{
    paddingLeft:20,
    paddingRight:20,
    paddingTop:20,
    borderRadius:20,
    backgroundColor:"white",
    marginTop:20,
    marginLeft:40,
    marginRight:40,
    height:200,
    textAlignVertical: 'top',
  }
})