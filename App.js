import React from "react";
import { NavigationContainer} from '@react-navigation/native';
import Tabs from "./navigation/Tabs";
import {LogBox, StatusBar} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


export default function App() {

  return (

      <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <Tabs/>
      </NavigationContainer>

  );
}

