import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Modal,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {s} from 'react-native-wind';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

import ColorPicker, {
  Swatches,
  Preview,
  OpacitySlider,
  HueCircular,
  HueSlider,
  returnedResults,
} from 'reanimated-color-picker';
import {ScrollView} from 'react-native';

export default function ColorPickerAndroid() {
  const [showModals, setShowModals] = useState([false, false, false, false]);
  const [selectedColors, setSelectedColors] = useState([
    'red',
    'green',
    'blue',
    'yellow',
  ]);

  const onSelectColor = (index: number, {hex}: returnedResults) => {
    const updatedColors = [...selectedColors];
    updatedColors[index] = hex;
    setSelectedColors(updatedColors);
  };

  const toggleModal = (index: number) => {
    const updatedModals = [...showModals];
    updatedModals[index] = !updatedModals[index];
    setShowModals(updatedModals);
  };

  return (
    <SafeAreaView style={s`px-3 py-3`}>
      <ScrollView>
        <View style={s`flex flex-row justify-between`}>
          <Text style={s`text-xl`}>Pattern Name</Text>
          <View style={s`flex flex-row justify-center items-center`}>
            <Ionicons name="sunny-outline" size={20} />
            <Slider
              style={{width: 150, height: 40}}
              value={5}
              minimumValue={0}
              maximumValue={5}
              step={0}
              minimumTrackTintColor="grey"
              maximumTrackTintColor="green"
              thumbTintColor="black"
              vertical={false}
            />
            <Ionicons name="sunny-outline" size={30} color="#f5aa42" />
          </View>
        </View>
        <View style={s`flex flex-row`}>
          {[0, 1, 2, 3].map(index => (
            <View
              key={index}
              style={s`flex flex-row justify-center items-center`}>
              <Text style={styles.colorText}>{`Color ${index + 1}`}</Text>
              <TouchableOpacity
                onPress={() => toggleModal(index)}
                style={[
                  styles.colorSquare,
                  {backgroundColor: selectedColors[index]},
                ]}
              />
              <Modal
                visible={showModals[index]}
                animationType="slide"
                style={s` flex justify-center items-center `}>
                <ColorPicker
                  style={{width: '100%'}}
                  value={selectedColors[index]}
                  onComplete={color => onSelectColor(index, color)}>
                  <Preview style={s`mt-3`} />
                  <HueCircular style={s`mt-3 h-72 justify-center item-center`}>
                    {/* <Panel5 /> */}
                  </HueCircular>
                  <HueSlider style={s`mt-3`} />
                  <OpacitySlider style={s`mt-3`} />
                  <Swatches style={s`mt-3`} />
                </ColorPicker>
                <Button title="Ok" onPress={() => toggleModal(index)} />
              </Modal>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  colorSquare: {
    width: 30,
    height: 30,
    borderRadius: 4,
    marginRight: 8,
  },
  colorText: {
    marginRight: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 8,
  },
  selectedColorContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
});
