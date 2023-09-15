import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {s} from 'react-native-wind';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
// import axios from 'axios';
import ColorPickerAndroid from '../../components/ColorPickerAndroid';
import ColorPickerIos from '../../components/ColorPickerIos';
import {Linking} from 'react-native';

export default function Home() {
  const [fetchedData, setFetchedData] = useState(null);
  const [powerOn, setPowerOn] = useState(false);
  // const [selectedPattern, setSelectedPattern] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('http://127.0.0.1/discover');
  //     const data = response.data;
  //     // console.log('Fetched data:', data);
  //     setFetchedData(data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1/discover');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // console.log('Fetched data:', data);
      setFetchedData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handlePowerToggle = () => {
    setPowerOn(!powerOn);
  };

  const findAddress = (
    data: {
      [x: string]: any;
      hasOwnProperty: (arg0: string) => any;
      address: any;
    } | null,
  ) => {
    if (typeof data === 'object') {
      if (data?.hasOwnProperty('address')) {
        return data.address;
      } else {
        for (const key in data) {
          const result = findAddress(data[key]);
          if (result) {
            return result;
          }
        }
      }
    }
    return null;
  };
  const address = findAddress(fetchedData);

  const openWebApp = () => {
    if (address) {
      Linking.openURL(`http://${address}`);
    }
  };

  return (
    <SafeAreaView style={s`px-3 py-3`}>
      <ScrollView>
        <View style={s`flex flex-row justify-between`}>
          <TouchableOpacity>
            <Text style={s`text-xl`}>Pattern Name</Text>
          </TouchableOpacity>

          <View style={s`flex flex-row justify-center items-center`}>
            <Ionicons
              name={powerOn ? 'power' : 'power-off'}
              size={20}
              onPress={handlePowerToggle}
            />
            <Slider
              style={{width: 150, height: 40}}
              value={fetchedData?.brightness || 0}
              minimumValue={0}
              maximumValue={1}
              step={0.01}
              minimumTrackTintColor="grey"
              maximumTrackTintColor="green"
              thumbTintColor="black"
              vertical={false}
            />
            <Ionicons name="sunny-outline" size={30} color="#f5aa42" />
          </View>
        </View>
        {/* Color Picker components based on platform */}
        {Platform.OS === 'android' && <ColorPickerAndroid />}
        {Platform.OS === 'ios' && <ColorPickerIos />}

        <Text>Program List:</Text>
        {fetchedData &&
        fetchedData.programList &&
        fetchedData.programList.length > 0 ? (
          <View>
            {fetchedData.programList.map(program => (
              <Text key={program.id}>{program.name}</Text>
            ))}
          </View>
        ) : (
          <Text>No programs available.</Text>
        )}
        <TouchableOpacity onPress={openWebApp}>
          <Text>Open Web App</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
