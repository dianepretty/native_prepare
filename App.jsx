
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View , StatusBar} from 'react-native';
import { TextInput } from 'react-native-web';
import ContTry from './src/screens/ContTry';
import Login from './src/screens/Login';
import Todo from './src/screens/Todo';
import { useContext, useState } from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/redux/state';
import AuthNavigator from './src/navigation/Authentication';
import { NavigationContainer } from '@react-navigation/native';
import {UserContext } from './MyContext';
import StackNavigator from './src/navigation/StackNavigator';
// import { useSelector, useDispatch } from 'react-redux'
// import { setAuth } from "./src/redux/actions"

export default function App() {
  

  const [auth,setAuth]=useState(false);
  

  return (
<UserContext.Provider value={{auth,setAuth}}>
   <NavigationContainer>
    <Provider store={Store}>
{auth?<StackNavigator></StackNavigator>:<AuthNavigator></AuthNavigator>}
{/* <StackNavigator></StackNavigator>: */}


      

      </Provider>
      </NavigationContainer>
      </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
