

import { useContext, useState } from 'react';
import Main from './src/Main';
import {UserContext } from './MyContext';

import MainContainer from './src/screens/MainContainer';
import store from './src/store'
import { Provider } from 'react-redux'
import { useSelector} from 'react-redux'
import { useFonts } from 'expo-font';
export default function App() {



  return (
    <Provider store={store}>
   <Main/>
      </Provider>
  );
}

