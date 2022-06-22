import { StyleSheet, Text, View,ScrollView } from 'react-native'

import React  from 'react'

import { useState } from 'react';
import { CheckBox } from 'react-native-elements';

const Todo = () => {
 const [data,setData]=useState([
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item",
        done:false
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
        done:true
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
        done:false
      },
 ])

 const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View>
      <Text>Welcome to Todo List</Text>
  
  <ScrollView>

{data.map((item,counter)=>(
    <View key={counter}>
       <CheckBox
       title=''
    disabled={false}
   checked={item.done}
   
//    onPress={()=>setData(...)}
    // onPress={() => setToggleCheckBox(!toggleCheckBox)}
  />
<Text>{item.title}</Text>

<View>

</View>
    </View>
))}

  </ScrollView>
      
   
   
     

    </View>
  )
}

export default Todo

const styles = StyleSheet.create({})