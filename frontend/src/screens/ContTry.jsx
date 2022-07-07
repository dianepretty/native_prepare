import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setName,setAge } from '../redux/actions'

const ContTry = () => {
  const {name,age}= useSelector(state=> state.userReducer);
  const log=()=>{
    let i=0
    while(i<10){
      console.log(age);
      i++;
    }
   
  }
  const dispatch=useDispatch();
  return (
    <View>
      <Text>Trying Context api</Text>

    <TouchableOpacity
    onPress={ ()=>{
      dispatch(setAge(12));
    log();

    }
      
    }
    style={{backgroundColor:"red",height:50,justifyContent:'center',alignContent:'center',alignItems:'center'}}>
<Text>Click to change clicked </Text>
    </TouchableOpacity>
    </View>
  )
}

export default ContTry