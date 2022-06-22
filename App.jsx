
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
import { UserProvider } from './MyContext';

export default function App() {
  
  const [allow,setAllow]=useState(false);
  // const {auth,setAuth}=useContext(Context);
  return (
<UserProvider>
   <NavigationContainer>
    {/* <Provider store={Store}> */}

     
<AuthNavigator></AuthNavigator>
      

      {/* </Provider> */}
      </NavigationContainer>
      </UserProvider>
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
