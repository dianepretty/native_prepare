import React from 'react'
import { useSelector} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './screens/MainContainer';
import AuthNavigator from './navigation/Authentication';
import StackNavigator from './navigation/StackNavigator';
export default function Main() {
    const auth=useSelector(state=>state.counter.authorized);
    const  voterAuthorized=useSelector(state=>state.counter.voterAuthorized);
  return (
<NavigationContainer>
  
  {/* {auth?<MainContainer></MainContainer>:<AuthNavigator></AuthNavigator>} */}

  {voterAuthorized?<StackNavigator></StackNavigator>:null}
  
      
        </NavigationContainer>
  )
}
