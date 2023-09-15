import {Image, View} from 'react-native';
import React from 'react';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {s} from 'react-native-wind';
export default function MainHeader() {
  return (
    <View style={s`flex-row justify-between bg-black items-center px-2`}>
      <Image
        source={require('/Users/monty/UltraLit/Mobile/ultralit/assets/logo.png')} // Replace 'path_to_your_image' with the actual path to your image
        style={{width: 200, height: 50}} // Adjust the width, height, and spacing as needed
      />
      {/* <FontAwesome name="power-off" size={25} color="green" /> */}
    </View>
  );
}
