import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

const RangeFilter = () => {
  const [value, setValue] = useState(0);

  const handleValueChange = (newValue :any) => {
    setValue(newValue);
  };

  const handleTextInputChange = (text :any) => {
    setValue(parseInt(text) || 0);
  };

  const data = value.toFixed().toString()

  return (
    <View>
      <Text>Value: {value.toFixed()}</Text>
      <Slider
        value={value}
        minimumValue={500}
        maximumValue={5000}
        onValueChange={handleValueChange}
        
      />
      <TextInput
        style={{ marginTop: 10, borderWidth: 1, borderColor: 'gray', padding: 5 }}
        keyboardType="numeric"
        value={data}
        onChangeText={handleTextInputChange}
      />
    </View>
  );
};

export default RangeFilter;
