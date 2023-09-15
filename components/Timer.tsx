import {View, Text, Switch, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {s} from 'react-native-wind';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function Timer() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const [isStartTimePickerVisible, setIsStartTimePickerVisible] =
    useState(false);
  const [isEndTimePickerVisible, setIsEndTimePickerVisible] = useState(false);

  const toggleTimer = () => {
    setIsEnabled(!isEnabled);
  };

  const showStartTimePicker = () => {
    setIsStartTimePickerVisible(true);
  };

  const hideStartTimePicker = () => {
    setIsStartTimePickerVisible(false);
  };

  const handleStartTimeConfirm = (newTime: React.SetStateAction<Date>) => {
    setStartTime(newTime);
    hideStartTimePicker();
  };

  const showEndTimePicker = () => {
    setIsEndTimePickerVisible(true);
  };

  const hideEndTimePicker = () => {
    setIsEndTimePickerVisible(false);
  };

  const handleEndTimeConfirm = (newTime: React.SetStateAction<Date>) => {
    setEndTime(newTime);
    hideEndTimePicker();
  };
  return (
    <View style={s`text-xl py-3`}>
      <View style={s`flex flex-row justify-between px-3 items-center`}>
        <Text style={s`text-xl`}>Timer</Text>
        <Switch value={isEnabled} onValueChange={toggleTimer} />
      </View>

      <View style={s`p-3`}>
        <View style={s`flex flex-row justify-between `}>
          <View style={s`flex flex-row justify-between`}>
            <Fontisto
              name="lightbulb"
              size={25}
              style={s`mr-2`}
              color="#f5aa42"
            />
            <Text style={s`text-xl`}>Lights on at:</Text>
          </View>

          <TouchableOpacity onPress={showStartTimePicker}>
            <Text style={s`text-xl`}>
              {startTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isStartTimePickerVisible}
            mode="time"
            date={startTime}
            onConfirm={handleStartTimeConfirm}
            onCancel={hideStartTimePicker}
          />
        </View>

        <View style={s`flex flex-row justify-between`}>
          <View style={s`flex flex-row justify-between`}>
            <Fontisto name="lightbulb" size={25} style={s`mr-2`} />
            <Text style={s`text-xl`}>Lights off at:</Text>
          </View>

          <TouchableOpacity onPress={showEndTimePicker}>
            <Text style={s`text-xl`}>
              {endTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isEndTimePickerVisible}
            mode="time"
            date={endTime}
            onConfirm={handleEndTimeConfirm}
            onCancel={hideEndTimePicker}
          />
        </View>
      </View>
    </View>
  );
}
