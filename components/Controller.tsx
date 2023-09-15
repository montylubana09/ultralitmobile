import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {s} from 'react-native-wind';
export default function Controller() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={s`text-xl py-3`}>
      <View style={s`bg-gray-200 px-3 py-3`}>
        <Text style={s`text-xl font-bold`}>Controller</Text>
      </View>

      <View style={s`px-3 py-3 flex flex-row justify-between `}>
        <Text style={s`text-lg`}>UltraLit 1.0</Text>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
      </View>
    </View>
  );
}
