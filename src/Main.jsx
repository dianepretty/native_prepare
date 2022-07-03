import React from 'react'
import { useSelector} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import MainContainer from './screens/MainContainer';
import AuthNavigator from './navigation/Authentication';
export default function Main() {
    const auth=useSelector(state=>state.counter.authorized);
  return (
<NavigationContainer>
  
  {auth?<MainContainer></MainContainer>:<AuthNavigator></AuthNavigator>}
  
      
        </NavigationContainer>
  )
}
