import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import React from 'react';
import MainContainer from './navigation/MainContainer';
import MainHeader from './header/MainHeader';

export default function App() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <MainHeader />
      <MainContainer />
    </SafeAreaView>
  );
}
