import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
export default function Advanced() {
  return (
    <View style={s`text-xl py-3`}>
      <View style={s`bg-gray-200 px-3 py-3`}>
        <Text style={s`text-xl font-bold`}>Advanced Settings</Text>
      </View>

      <View style={s`px-3 py-3 flex flex-row justify-between `}>
        <TouchableOpacity>
          <Text style={s`text-lg`}>Open Web App Interface</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
