import {View, Text} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
import Timer from '../../components/Timer';
import Controller from '../../components/Controller';
import Advanced from '../../components/Advanced';
export default function Settings() {
  return (
    <View style={s`flex-1  bg-white`}>
      <View style={s`bg-gray-200 px-3 py-3`}>
        <Text style={s`text-2xl font-bold`}>Settings</Text>
      </View>
      <Timer />
      <Controller />
      <Advanced />
    </View>
  );
}
