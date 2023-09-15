import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {s} from 'react-native-wind';
export default function Info() {
  return (
    <View style={s`flex flex-col justify-start px-4 py-3  flex-1`}>
      <View>
        <TouchableOpacity style={s`bg-red-300 p-14 rounded-lg  my-2`}>
          <Text style={s` text-xl font-semibold bg-red-300 text-center `}>
            Demo videos
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={s`bg-red-300 p-14 rounded-lg  my-2`}>
          <Text style={s`text-xl font-semibold text-center`}>FAQ</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={s`bg-red-300 p-14 rounded-lg my-2 `}>
          <Text style={s`text-xl font-semibold text-center`}>TroubleShoot</Text>
        </TouchableOpacity>
      </View>

      <View style={s`flex flex-col  justify-center items-center my-2 `}>
        <Text style={s`text-xl font-normal text-center`}>Still Need Help?</Text>
        <View style={s`flex flex-row text-center my-2`}>
          <Text>Phone:</Text>
          <Text>+1 587-370-8607</Text>
        </View>
        <View style={s`flex flex-row text-center`}>
          <Text>Email:</Text>
          <Text>info@ultralit.ca</Text>
        </View>
      </View>
      <View style={s`justify-center items-center p-4 flex flex-row`}>
        <TouchableOpacity style={s` rounded-full bg-red-300 p-4  `}>
          <Text style={s`text-xl font-semibold  text-center px-10  `}>
            Website
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
