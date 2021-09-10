import { StatusBar } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import { Routes } from './src/routes';
import { Home } from './src/Telas/Home';



export default function App() {

  return (
    <View >

      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <Home />
      <Routes />
    </View>
  );
}

