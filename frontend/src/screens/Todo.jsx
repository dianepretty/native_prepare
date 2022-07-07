import { TextInput,TouchableOpacity , Modal,StyleSheet, Text, View,ScrollView,StatusBar,Image } from 'react-native'

import React  from 'react'

import { useState } from 'react';
import { CheckBox } from 'react-native-elements';

const Todo = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
 const [data,setData]=useState([
    {
      
        title: "First Item",
        done:false
      },
      {
 
        title: "Second Item",
        done:true
      },
      {
        title: "Third Item",
        done:false
      },
 ])

 const [task,setTask]=useState("");

 const updateData = ( index) => {
  
    let placeHolderObject = data;

    placeHolderObject[index].done = !placeHolderObject[index].done;
    
    setData(placeHolderObject)
   

   

 }

 function addData(task){

  let obj={title:task,done:false};
  let placeHolderObject = data;
  placeHolderObject.push(obj)
  setData(placeHolderObject)
 }

 const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={styles.container}>
      <Modal
     
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View  style={{height:"45%",marginTop:"30%" , marginLeft:20,marginRight:20 , backgroundColor:"black",alignItems:"center",justifyContent:"center",}}>
        <TextInput
        style={styles.input}
        onChangeText={newTask=>{setTask(newTask);}}
        value={task}
        placeholder="Enter new task"
        keyboardType="email-address"
      />
  <TouchableOpacity onPress={()=>{addData(task);setModalVisible(false)}}  style={{backgroundColor:"#358B9B",padding:15,alignItems:"center"
     ,marginTop:20 ,borderRadius:4,width:"60%"}}>
        <Text style={{color:"white"}}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{setModalVisible(false)}} style={{justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"white",marginTop:30}}>Cancel</Text>
      </TouchableOpacity>
        </View>
      </Modal>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      <View>
    <Image source={require('../images/shape.png')} style={{width:200,margin:0}} resizeMode="cover"></Image>
  </View>
    

   <View>
   

    <View style={styles.box} >
    <Text style={{marginLeft:20,fontWeight:"bold", fontSize:20,marginBottom:15,marginTop:15}}>
      Task List
    </Text>
    <View style={{alignItems:"center",justifyContent:"center"}}>
<TouchableOpacity onPress={()=>{setModalVisible(true)}}  style={{backgroundColor:"#358B9B",padding:15,alignItems:"center"
     ,marginTop:20 ,borderRadius:4,width:"60%"}}>
        <Text style={{color:"white"}}>New Task</Text>
      </TouchableOpacity>
</View>
    <ScrollView  >

{data.map((item,counter)=>(
   <View style={{flexDirection:"row"}} key={counter}>
      <CheckBox
      title=''
   disabled={false}
  checked={item.done}
  
  onPress={()=>updateData(counter)}
 //   onPress={() => setToggleCheckBox(!toggleCheckBox)}
 />
<Text style={{marginTop:18}}>{item.title}</Text>

<View>

</View>
   </View>
))}

 </ScrollView>


    </View>

   
   </View>
   
     

    </View>
  )
}

export default Todo

const styles = StyleSheet.create({

    container:{
      
     backgroundColor:"#EEEEEE",
     height:"100%"
    },
    box:{
      marginLeft:30,
      marginRight:30,
      backgroundColor:"",
   shadowColor:"black",
   
  shadowOpacity:1,
  shadowRadius:10,
  paddingTop:20,
  paddingBottom:40
  
    }
    ,
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